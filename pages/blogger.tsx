import Layout from '../layout/Basic';
import IconHeader from '../components/IconHeader';
import Blog from '../components/blog/Blog';
import Filter from '../components/blog/Filter';
import BlogList from '../components/blog/BlogList';
import { useGetBlog } from '../hooks/useBlog';
import styled from 'styled-components';

const blogger = () => {
    const { data: blogs, error } = useGetBlog('/blogs');

    if (error) return <h1>Something went wrong</h1>;
    if (!blogs) return <h1>Loading...</h1>;

    return (
        <Layout>
            <IconHeader />
            <Header>
                <BurgerIcon />
                <Title>블로고</Title>
                <SearchIcon />
            </Header>
            <Banner />
            <Divide>
                <Blog />
                <Filter />
            </Divide>
            <Bar />
            {blogs.map((blog) => (
                <BlogList blog={blog} key={blog.id} />
            ))}
        </Layout>
    )
}

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 666px;
    height: 50px; 
    margin: 0 auto;
    color: #5382eb;
`;

const BurgerIcon = styled.img.attrs({
    src: '../images/burger.png'
})`
    width: 50px;
    height: 37px;
`;

const Title = styled.h1`
    display: inline-block;
    width: 150px;
    height: 100%;
    font-size: 40px;
`;

const SearchIcon = styled.img.attrs({
    src: '../images/search.jpg'
})`
    width: 39px;
    height: 39px;
`;

const Banner = styled.img.attrs({
    src: '../images/banner.png'
})`
    width: 750px;
    height: 170px;
    margin: 32px 0 16px;
    object-fit: contain;
`;

const Divide = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 666px;
    margin: 0 auto;
`;

const Bar = styled.div`
    width: 666px;
    height: 4px;
    margin: 14px 42px 23px;
    background-color: #5382eb;
`;

export default blogger