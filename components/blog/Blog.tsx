import styled from "styled-components"

const Post = () => {
  return (
    <Button>
        <PostImage />
        <WriteImage />
    </Button>
  )
}

const Button = styled.div`
    position: relative;
    width: 157px;
    height: 53px;
    
    padding: 10px 18px 10px 22px;
    border-radius: 26.5px;
    background-color: #5382eb;
`;

const PostImage = styled.img.attrs({
    src: '../images/post.png'
})`
    position: absolute;
    top: 10px;
    left: 22px;
    width: 72px;
    height: 32px;
    font-size: 26px;
    font-weight: 500;
    color: #fff;
`;

const WriteImage = styled.img.attrs({
    src: '../images/write.jpg'
})`
    position: absolute;
    top: 10px;
    right: 18px;
    width: 32px;
    height: 32px;
`;

export default Post