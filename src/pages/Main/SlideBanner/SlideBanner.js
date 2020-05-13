import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

const changingBanner = (slideBanners, current) => {
  const filteredBanner = slideBanners
    .filter((banner) => {
      return banner.id === (current % 2) + 1;
    })
    .concat({
      id: 0,
      img: "",
      title: "",
      description: "",
      action: "",
    });
  return filteredBanner[0];
};

function SlideBanner() {
  const [slideBanners, setSlideBanners] = useState([]);
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    fetch("/data/mainBanner.json")
      .then((data) => data.json())
      .then((data) => setSlideBanners(data));
  }, []);

  // setInterval(() => {
  //   setCurrent(current + 1);
  // }, 5000);

  const prevBanner = () => {
    if (current < 3) {
      setCurrent(1);
    } else {
      setCurrent(current - 1);
    }
  };
  const nextBanner = () => {
    if (current > 3) {
      setCurrent(1);
    } else {
      setCurrent(current + 1);
    }
  };
  const currentBanner = changingBanner(slideBanners, current);

  return (
    <SlideBannerWrap>
      <Container>
        <BannerContainer id={currentBanner.id}>
          <BannerLeft>
            <Tilte>{currentBanner.title}</Tilte>
            <Description>
              <p>{currentBanner.description1}</p>
              <p>{currentBanner.description2}</p>
            </Description>
            <Action>{currentBanner.action}</Action>
          </BannerLeft>
          <BannerRight>
            <BannerImg src={currentBanner.img} alt="img" />
          </BannerRight>
          <Button>
            <Prev onClick={prevBanner}>
              <ARrowPrev />
            </Prev>
            <Next onClick={nextBanner}>
              <ArrowNext />
            </Next>
          </Button>
        </BannerContainer>
      </Container>
    </SlideBannerWrap>
  );
}

const SlideBannerWrap = styled.div`
  width: 100%;
  height: 344px;
  background-color: ${(props) => props.theme.gdacColor};
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const BannerContainer = styled.div`
  color: white;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;

  @media ${(props) => props.theme.laptop} {
    width: 1152px;
    height: 100%;
    margin: 0 auto;
  }
`;

const BannerLeft = styled.div`
  position: absolute;
  top: 160px;
  width: 80%;

  @media ${(props) => props.theme.mobile} {
    top: 100px;
  }

  @media ${(props) => props.theme.laptop} {
    position: static;
    margin-top: 65px;
  }
`;

const Tilte = styled.div`
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 0;
  margin-bottom: 25px;
  z-index: 10;

  @media ${(props) => props.theme.mobile} {
    font-size: 24px;
  }
`;

const Description = styled.div`
  font-size: 18px;
  letter-spacing: -0.03em;
  line-height: 30px;
  margin-bottom: 30px;

  @media ${(props) => props.theme.mobile} {
    font-size: 13px;
    line-height: 20px;
  }
`;

const Action = styled.div`
  height: 50px;
  width: 220px;
  background-color: ${(props) => props.theme.subColor};
  border-radius: 2px;
  line-height: 50px;
  text-align: center;
  font-size: 14px;
`;

const BannerRight = styled.div`
  position: absolute;
  top: 130px;
  right: 100px;

  @media ${(props) => props.theme.tabletS} {
    top: 190px;
  }

  @media ${(props) => props.theme.mobile} {
    top: 110px;
    right: 50px;
  }

  @media ${(props) => props.theme.laptop} {
    position: static;
    margin-top: 40px;
  }
`;

const BannerImg = styled.img`
  height: 268px;
  width: 330px;

  @media ${(props) => props.theme.tabletS} {
    width: 205px;
    height: 167px;
  }

  @media ${(props) => props.theme.tabletS} {
    width: 180px;
    height: 150px;
  }
`;

const Button = styled.div`
  cursor: pointer;

  @media ${(props) => props.theme.tabletS} {
    display: none;
  }

  @media ${(props) => props.theme.laptop} {
    position: absolute;
    margin: 0 auto;
  }
`;

const Prev = styled.div`
  position: absolute;
  top: 245px;
  left: 20px;
  height: 34px;
  width: 26px;
  background-color: rgba(255, 255, 255, 0.1);
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  @media ${(props) => props.theme.laptop} {
    top: 150px;
    left: -700px;
  }
`;

const ARrowPrev = styled.i`
  position: absolute;
  top: 15px;
  left: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(135deg);
`;

const Next = styled.div`
  position: absolute;
  top: 245px;
  right: 20px;
  height: 34px;
  width: 26px;
  background-color: rgba(255, 255, 255, 0.1);

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  @media ${(props) => props.theme.laptop} {
    top: 150px;
    right: -700px;
  }
`;

const ArrowNext = styled.div`
  position: absolute;
  top: 15px;
  left: 8px;
  border: solid white;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(315deg);
`;

export default SlideBanner;
