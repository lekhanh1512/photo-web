// Code: Service component

import Carousel from "./Carousel";

const Service = () => {
  const services = [
    {
      title: "Environmental Studies & Earth Sciences",
      price: "$45",
      imageUrl:
        "bia1.jpg",
      link: "https://shelly.merku.love/classes/environmental-studies-earth-sciences/",
    },
    {
      title: "Environmental Studies & Earth Sciences",
      price: "$45",
      imageUrl:
        "bia2.jpg",
      link: "https://shelly.merku.love/classes/environmental-studies-earth-sciences/",
    }, {
      title: "Environmental Studies & Earth Sciences",
      price: "$45",
      imageUrl:
        "bia3.jpg",
      link: "https://shelly.merku.love/classes/environmental-studies-earth-sciences/",
    }, {
      title: "Environmental Studies & Earth Sciences",
      price: "$45",
      imageUrl:
        "bia4.jpg",
      link: "https://shelly.merku.love/classes/environmental-studies-earth-sciences/",
    }, {
      title: "Environmental Studies & Earth Sciences",
      price: "$45",
      imageUrl:
        "bia5.jpg",
      link: "https://shelly.merku.love/classes/environmental-studies-earth-sciences/",
    },
    {
      title: "Environmental Studies & Earth Sciences",
      price: "$45",
      imageUrl:
        "bia1.jpg",
      link: "https://shelly.merku.love/classes/environmental-studies-earth-sciences/",
    },
    // Bạn có thể thêm nhiều mục khác nhau tại đây
  ];

  return (
    <div>
      <Carousel services={services} />
    </div>
  );
};

export default Service;
