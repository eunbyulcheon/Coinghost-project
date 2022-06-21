import styled from 'styled-components';

const Filter = () => {
  return (
    <LikedButton>
        <Image alt='' />
        <AllButton>
            <AllPostsImage alt='' />
        </AllButton>
    </LikedButton>
  )
}

const LikedButton = styled.button`
    position: relative;
    width: 250px;
    height: 65px;
    /* margin: 16px 42px 14px 20px; */
    padding: 6px 30px 6px 8px;
    border-radius: 32.5px;
    background-color: #f0f6fd;
`;

const Image = styled.img.attrs({
    src: '../images/mostliked.png',
})`
    position: absolute;
    top: 17px;
    right: 30px;
    width: 72px;
    height: 32px;
    font-size: 26px;
    font-weight: 500;
    color: #909090;
`;

const AllButton = styled.button`
    position: absolute;
    top: 6px;
    left: 8px;
    width: 250px;
    width: 116px;
    height: 53px;
    padding: 11px 22px 10px;
    border-radius: 26.5px;
    background-color: #5382eb;
`;

const AllPostsImage = styled.img.attrs({
    src: '../images/allposts.png',
})`
    width: 72px;
    height: 32px;
    font-size: 26px;
    font-weight: 500;
    text-align: center;
    color: #fff;
`

export default Filter