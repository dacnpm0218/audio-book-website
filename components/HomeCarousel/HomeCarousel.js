// import react
import { useRef, useState } from "react";

// import MUI components
import Box from "@mui/material/Box";

// import swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import {
  Grid,
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  Typography,
} from "@mui/material";
// import icons
import { CarouselNext, CarouselPrev } from "../../components/Icons/index";

const SwiperBtnNext = (props) => {
  const { isSm } = props;
  return {
    position: "absolute",
    transform: "translateX(10px)",
    zIndex: 2,
    ...(isSm && { display: "none" }),
  };
};

const SwiperBtnPrev = (props) => {
  const { isSm } = props;
  return {
    position: "absolute",
    left: 0,
    transform: "translateX(-15px)",
    zIndex: 2,
    ...(isSm && { display: "none" }),
  };
};

export default function HomeCarousel(props) {
  const { isSm } = props;

  const [current, setCurrent] = useState(0);
  const navigationNewContentPrevRef = useRef(null);
  const navigationNewContentNextRef = useRef(null);

  const images = [
    {
      imgSrc:
        "http://res.cloudinary.com/dacnpm-02-18/image/upload/v1649747227/stedjd6dvav1aoesfzns.jpg",
      thumbnailSrc: "https://picsum.photos/1190/420?img=1",
      alt: "image 1",
    },
  ];

  const handleChangeSlideClick = (isNext) => {
    let newCurrent = null;
    if (isNext) {
      newCurrent = current < images.length - 1 ? current + 1 : current;
    } else {
      newCurrent = current > 0 ? current - 1 : current;
    }
    setCurrent(newCurrent);
  };

  const handleClickThumbnail = (e) => {
    const id = Number(e.currentTarget.id);
    setCurrent(id);
    e.stopPropagation();
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={0.5}></Grid>
        <Grid item xs={11}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
              <Grid item xs={9}>
                <Box
                  sx={{
                    height: isSm ? "280px" : "420px",
                    position: "relative",
                    width: "98%",
                  }}
                >
                  <div style={{ height: "80%", width: "10%" }}>
                    {images.map((image, idx) => (
                      <img
                        style={{
                          ...(idx !== current && { display: "none" }),
                          objectFit: "cover",
                          width: `100%`,
                          position: "absolute",
                          height: "100%",
                          left: 0,
                          borderRadius: "16px",
                        }}
                        alt={image.alt}
                        key={idx}
                        src={image.imgSrc}
                      />
                    ))}
                  </div>
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box
                  sx={{
                    position: "absolute",
                    width: isSm ? "30%" : "30%",
                    minWidth: isSm ? "200px" : "200px",

                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    right: { sm: 5, xs: 0 },
                  }}
                >
                  <Swiper
                    navigation={{
                      prevEl: navigationNewContentPrevRef.current,
                      nextEl: navigationNewContentNextRef.current,
                    }}
                    onBeforeInit={(swiper) => {
                      swiper.params.navigation.prevEl =
                        navigationNewContentPrevRef.current;
                      swiper.params.navigation.nextEl =
                        navigationNewContentNextRef.current;
                    }}
                    watchSlidesProgress={true}
                    slidesPerView={3}
                    modules={[Autoplay, Pagination, Navigation]}
                  >
                    <div
                      sx={{
                        mixBlendMode: "normal",

                        position: "relative",
                        mt: 2,
                      }}
                    >
                      <Card
                        sx={{
                          maxWidth: 300,
                          maxHeight: 250,
                          marginLeft: "30px",
                          borderRadius: "16px",
                          mt: 2,
                        }}
                      >
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="140"
                            image="https://picsum.photos/1090/420?img=4"
                            alt="green iguana"
                          />
                        </CardActionArea>
                      </Card>
                      <Card
                        sx={{
                          maxWidth: 300,
                          maxHeight: 250,
                          marginLeft: "30px",
                          borderRadius: "16px",
                          marginTop: "20px",
                        }}
                      >
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="140"
                            image="https://picsum.photos/1090/420?img=4"
                            alt="green iguana"
                          />
                        </CardActionArea>
                      </Card>
                      <Card
                        sx={{
                          maxWidth: 300,
                          maxHeight: 250,
                          marginLeft: "30px",
                          borderRadius: "16px",
                          marginTop: "20px",
                        }}
                      >
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="140"
                            image="https://picsum.photos/1090/420?img=4"
                            alt="green iguana"
                          />
                        </CardActionArea>
                      </Card>
                    </div>
                  </Swiper>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={0.5}></Grid>
      </Grid>
    </Box>
  );
}
