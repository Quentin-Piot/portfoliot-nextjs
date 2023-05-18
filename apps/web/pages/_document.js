import Document, {Head, Html, Main, NextScript} from 'next/document'

const BaseCSS = ({css}) =>
    <style
        dangerouslySetInnerHTML={{
            __html: css
        }}
    />

BaseCSS.defaultProps = {
    css: '*{box-sizing:border-box}body{margin:0}'
}

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="icon" href="/favicon.ico"/>
                    <meta name="application-name" content="Quentin Piot"/>

                    <meta
                        name="google-site-verification"
                        content="fkukldKte3_7HBaHyBTWur7CHtBxeN-Btp-b1GujCsE"
                    />
                    <meta
                        name="description"
                        content="Portfolio of Quentin Piot. French software Engineer based in Asia. Well-versed in a wide range of frontend technologies (React, Vue, Next.js, Redux) and backend technologies (Node.js/Nest.js/Hapi.js, Java/Spring, GraphQl, PostgresSQL)"
                    />
                    <meta name="mobile-web-app-capable" content="yes"/>
                    <meta name="apple-mobile-web-app-capable" content="yes"/>
                    <meta name='generator' content='mdx-docs'/>
                    <link href="https://fonts.googleapis.com/css?family=Capriola&amp;subset=latin-ext"
                          rel="stylesheet"/>
                    <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900"
                          rel="stylesheet"/>
                    <link href="https://fonts.googleapis.com/css?family=Satisfy" rel="stylesheet"/>
                    <link href="https://fonts.googleapis.com/css?family=Alex+Brush&amp;subset=latin-ext"
                          rel="stylesheet"></link>
                    <link href="https://fonts.googleapis.com/css?family=Raleway:400,600,700,800,900&display=swap"
                          rel="stylesheet"></link>
                    <link href="https://fonts.googleapis.com/css?family=Work+Sans:100,200,300,400,500,600,700,800"
                          rel="stylesheet"/>
                    <BaseCSS/>
                </Head>
                <body className="try">
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}
