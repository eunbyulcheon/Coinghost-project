import styled from "styled-components";

const Comments = () => {
  return (
    <Box>
        <Comment />
        <Count>0</Count>
    </Box>
  )
}

const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Comment = styled.img.attrs({
    src: '../images/comment.png',
})`
    width: 28px;
    height: 28px;
    margin-right: 12px;
`;

const Count = styled.p`
    width: 15px;
    height: 32px;
    font-size: 26px;
    font-weight: normal;
    line-height: 1.08;
    letter-spacing: -0.65px;
    color: #5382eb;
`;

export default Comments