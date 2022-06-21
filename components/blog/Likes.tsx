import styled from "styled-components";

const Likes = () => {
  return (
    <Box>
        <Heart />
        <Count>0</Count>
    </Box>
  )
}

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Heart = styled.img.attrs({
    src: '../images/heart.jpg',
})`
    width: 30px;
    height: 30px;
    margin-right: 12px;
`;

const Count = styled.p`
    width: 15px;
    height: 32px;
    margin-right: 15px;
    font-size: 26px;
    font-weight: normal;
    line-height: 1.08;
    letter-spacing: -0.65px;
    color: #5382eb;
`;

export default Likes