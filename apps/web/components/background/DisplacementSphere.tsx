import React, { useEffect, useRef } from 'react'
import {
  AmbientLight,
  DirectionalLight,
  Mesh,
  MeshPhongMaterial,
  PerspectiveCamera,
  Scene,
  SphereBufferGeometry,
  sRGBEncoding,
  UniformsLib,
  UniformsUtils,
  Vector2,
  WebGLRenderer,
} from 'three'
import { spring, value } from 'popmotion'
import vertShader from './sphereVertShader'
import fragShader from './sphereFragShader'
import { Transition } from 'react-transition-group'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { useInViewport } from '../../hooks/useInViewport'
import { reflow } from '../../utils/transition'
import { media, rgbToThreeColor } from '../../utils/style'
import { cleanRenderer, cleanScene, removeLights } from '../../utils/three'
import { useColorMode } from '@chakra-ui/react'

const DisplacementSphere = (props: any) => {
  const { colorMode } = useColorMode()

  const rgbBackground = colorMode === 'light' ? '237 242 247' : '17 17 17'
  const width = useRef<any>(window.innerWidth)
  const height = useRef<any>(window.innerHeight)
  const start = useRef<any>(Date.now())
  const canvasRef = useRef<any>()
  const mouse = useRef<any>()
  const renderer = useRef<any>()
  const camera = useRef<any>()
  const scene = useRef<any>()
  const lights = useRef<any>()
  const uniforms = useRef<any>()
  const material = useRef<any>()
  const geometry = useRef<any>()
  const sphere = useRef<any>()
  const tweenRef = useRef<any>()
  const sphereSpring = useRef<any>()
  const prefersReducedMotion = Boolean(usePrefersReducedMotion() && false) //disabled until switching themes fixed
  const isInViewport = useInViewport(canvasRef)

  useEffect(() => {
    try {
      mouse.current = new Vector2(0.8, 0.5)
      renderer.current = new WebGLRenderer({
        canvas: canvasRef.current,
        powerPreference: 'high-performance',
      })
      renderer.current.setSize(width.current, height.current)
      renderer.current.setPixelRatio(1)
      renderer.current.outputEncoding = sRGBEncoding

      camera.current = new PerspectiveCamera(55, width.current / height.current, 0.1, 200)
      camera.current.position.z = 52

      scene.current = new Scene()

      material.current = new MeshPhongMaterial()
      material.current.onBeforeCompile = (shader: any) => {
        uniforms.current = UniformsUtils.merge([
          UniformsLib['common'],
          UniformsLib['lights'],
          shader.uniforms,
          { time: { type: 'f', value: 0 } },
        ])

        shader.uniforms = uniforms.current
        shader.vertexShader = vertShader
        shader.fragmentShader = fragShader
        shader.lights = true
      }

      geometry.current = new SphereBufferGeometry(32, 128, 128)

      sphere.current = new Mesh(geometry.current, material.current)
      sphere.current.position.z = 0
      sphere.current.modifier = Math.random()
      scene.current.add(sphere.current)
    } catch (e) {
      console.log(e)
    }
    return () => {
      cleanScene(scene.current)
      cleanRenderer(renderer.current)
    }
  }, [])

  useEffect(() => {
    const dirLight = new DirectionalLight(rgbToThreeColor('240 240 210'), 0.6)
    const ambientLight = new AmbientLight(
      rgbToThreeColor('200 200 250'),
      colorMode === 'light' ? 0.8 : 0.3
    )

    dirLight.position.z = 200
    dirLight.position.x = 100
    dirLight.position.y = 100

    lights.current = [dirLight, ambientLight]
    scene.current.background = rgbToThreeColor(rgbBackground)
    lights.current.forEach((light: any) => scene.current.add(light))

    return () => {
      removeLights(lights.current)
    }
  }, [rgbBackground, colorMode])

  useEffect(() => {
    const handleResize = () => {
      const canvasHeight = window.innerHeight
      const windowWidth = window.innerWidth
      const fullHeight = canvasHeight + canvasHeight * 0.3
      canvasRef.current.style.height = fullHeight
      renderer.current.setSize(windowWidth, fullHeight)
      camera.current.aspect = windowWidth / fullHeight
      camera.current.updateProjectionMatrix()

      // Render a single frame on resize when not animating
      if (prefersReducedMotion) {
        renderer.current.render(scene.current, camera.current)
      }

      if (windowWidth <= media.mobile) {
        sphere.current.position.x = 14
        sphere.current.position.y = 10
      } else if (windowWidth <= media.tablet) {
        sphere.current.position.x = 18
        sphere.current.position.y = 14
      } else {
        sphere.current.position.x = 22
        sphere.current.position.y = 16
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [prefersReducedMotion])

  useEffect(() => {
    const onMouseMove = (event: any) => {
      const { rotation } = sphere.current

      const position = {
        x: event.clientX / window.innerWidth,
        y: event.clientY / window.innerHeight,
      }

      if (!sphereSpring.current) {
        sphereSpring.current = value(rotation.toArray(), (values: any) =>
          rotation.set(values[0], values[1], sphere.current.rotation.z)
        )
      }

      tweenRef.current = spring({
        from: sphereSpring.current.get(),
        to: [position.y / 2, position.x / 2],
        stiffness: 30,
        damping: 20,
        velocity: sphereSpring.current.getVelocity(),
        mass: 2,
        restSpeed: 0.0001,
      }).start(sphereSpring.current)
    }

    if (!prefersReducedMotion && isInViewport) {
      window.addEventListener('mousemove', onMouseMove)
    }

    return () => {
      window.removeEventListener('mousemove', onMouseMove)

      if (tweenRef.current) {
        tweenRef.current.stop()
      }
    }
  }, [isInViewport, prefersReducedMotion])

  useEffect(() => {
    let animation: any

    const animate = () => {
      animation = requestAnimationFrame(animate)

      if (uniforms.current !== undefined) {
        uniforms.current.time.value = 0.00005 * (Date.now() - start.current)
      }

      sphere.current.rotation.z += 0.002
      renderer.current.render(scene.current, camera.current)
    }

    if (!prefersReducedMotion && isInViewport) {
      animate()
    } else {
      renderer.current.render(scene.current, camera.current)
    }

    return () => {
      cancelAnimationFrame(animation)
    }
  }, [isInViewport, prefersReducedMotion])

  return (
    <Transition appear in onEnter={reflow} timeout={3000}>
      {(status) => (
        <canvas
          aria-hidden
          ref={canvasRef}
          color={'red'}
          {...props}
          style={{
            opacity: status === 'entered' || status === 'entering' ? 1 : 0,
            position: 'fixed',
            transitionDuration: 3,
            transitionProperty: 'opacity',
            transitionTimingFunction: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
          }}
        />
      )}
    </Transition>
  )
}

export default DisplacementSphere
