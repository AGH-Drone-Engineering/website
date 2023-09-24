import {
    Card,
    Container,
    Description,
    Footer,
    Grid,
    Logo,
    Main,
    Title,
} from './page.styles';

export default function RootPage() {
    return (
        <Container>
            <Main>
                <Title>
                    Welcome to <a href="https://nextjs.org">Next.js!</a>
                </Title>
                <Description>
                    Get started by editing <code>pages/index.tsx</code>
                </Description>
                <Grid>
                    <Card href="https://nextjs.org/docs">
                        <h3>Documentation &rarr;</h3>
                        <p>
                            Find in-depth information about Next.js features and
                            API.
                        </p>
                    </Card>
                    <Card href="https://nextjs.org/learn">
                        <h3>Learn &rarr;</h3>
                        <p>
                            Learn about Next.js in an interactive course with
                            quizzes!
                        </p>
                    </Card>
                    <Card href="https://github.com/vercel/next.js/tree/canary/examples">
                        <h3>Examples &rarr;</h3>
                        <p>
                            Discover and deploy boilerplate example Next.js
                            projects.
                        </p>
                    </Card>
                    <Card href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
                        <h3>Deploy &rarr;</h3>
                        <p>
                            Instantly deploy your Next.js site to a public URL
                            with Vercel.
                        </p>
                    </Card>
                </Grid>
            </Main>
            <Footer>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <Logo
                        src="/vercel.svg"
                        alt="Vercel"
                    />
                </a>
            </Footer>
        </Container>
    );
}
