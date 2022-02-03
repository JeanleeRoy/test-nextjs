import Header from '../../../components/header';

const Post = ({ title, body }) => (
    <>
        <Header />
        <h1>{title}</h1>
        <p>{body}</p>
    </>
)


const baseURI = 'https://jsonplaceholder.typicode.com/';

Post.getInitialProps = async ({ query }) => {
    const res = await fetch(baseURI + `posts/${query.id}`);
    const post = res.json();

    return post;
}

export default Post;
