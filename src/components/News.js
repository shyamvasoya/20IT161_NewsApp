import React, { Component } from "react";

import { NewsItem } from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "Entrepreneur",
      },
      author: "Jea Yu",
      title: "3 Deflation Enablers Stocks that Can Thrive in a Recession",
      description:
        "Deflation enablers are companies that help organizations cut costs, grow efficiencies, and optimize performance during uncertain times.",
      url: "https://www.entrepreneur.com/article/434264",
      urlToImage:
        "https://assets.entrepreneur.com/providers/marketbeat/hero-image-marketbeat-434264.jpeg",
      publishedAt: "2022-08-29T05:00:00Z",
      content:
        "Deflation enablers are companies that help organizations cut costs, grow efficiencies, and optimize performance during uncertain macroeconomic environments like recessions and bear markets. As consum… [+4656 chars]",
    },
    {
      source: {
        id: null,
        name: "Hipertextual",
      },
      author: "Rubén Chicharro",
      title:
        "Samsung Galaxy Watch 5 Pro, análisis: el mejor smartwatch para Android ahora es todavía mejor",
      description:
        "Junto con los Galaxy Z Flip 4 y Galaxy Z Fold 4, Samsung también anunció dos nuevos relojes inteligentes. Por un lado, el Galaxy Watch 5, que es una nueva generación del Galaxy Watch 4 que la compañía lanzó el año pasado, y que incluye una serie de mejoras a …",
      url: "https://hipertextual.com/2022/08/samsung-galaxy-watch-5-pro-review-analisis-opini",
      urlToImage:
        "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2022/08/samsung-galaxy-wach-5-pro-02-scaled.jpg?fit=2560%2C1440&quality=50&strip=all&ssl=1",
      publishedAt: "2022-08-29T03:00:00Z",
      content:
        "Junto con los Galaxy Z Flip 4 y Galaxy Z Fold 4, Samsung también anunció dos nuevos relojes inteligentes. Por un lado, el Galaxy Watch 5, que es una nueva generación del Galaxy Watch 4 que la compañí… [+10202 chars]",
    },
    {
      source: {
        id: null,
        name: "Xataka.com",
      },
      author: "Eva Rodríguez de Luis",
      title:
        "Vuelta a la carga de PcComponentes: siete portátiles con descuentos de hasta el 45% ideales para la vuelta al cole en función de lo que estudies",
      description:
        "Si este curso que está por empezar necesitas un ordenador nuevo, no te pierdas las ofertas de la Vuelta a la carga de PcComponentes, porque la tienda especializada en informática tiene descuentos de hasta el 45% y la campaña dura hasta el 18 de septiembre (au…",
      url: "https://www.xataka.com/seleccion/vuelta-a-carga-pccomponentes-siete-portatiles-descuentos-45-ideales-para-vuelta-al-cole-funcion-que-estudies",
      urlToImage: "https://i.blogs.es/38a467/pccomponentes/840_560.jpg",
      publishedAt: "2022-08-29T06:31:40Z",
      content:
        "Si este curso que está por empezar necesitas un ordenador nuevo, no te pierdas las ofertas de la Vuelta a la carga de PcComponentes, porque la tienda especializada en informática tiene descuentos de … [+4069 chars]",
    },
    {
      source: {
        id: null,
        name: "heise online",
      },
      author: "Leo Becker",
      title:
        "heise+ | iOS 16 und macOS 13 im Detail: Was Apples neue Systeme bringen",
      description:
        "Das iPhone wird persönlicher, Macs und iPads erhalten eine neue Fensterverwaltung, watchOS 9 punktet mit Fitnessneuerungen. Das ist längst nicht alles.",
      url: "https://www.heise.de/hintergrund/iOS-16-und-macOS-13-im-Detail-Was-Apples-neue-Systeme-bringen-7240552.html",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/5/9/6/6/6/7/22_04_leo_neue_systeme_aufmacher_digital-e56763a2c632c85a.jpg",
      publishedAt: "2022-08-29T05:30:00Z",
      content:
        "Inhaltsverzeichnis\r\nEgal ob Mac, iPhone, iPad oder Apple Watch: Die neuen Betriebssysteme bringen einen Berg an Neuerungen, Apple macht die Geräte immer flexibler und cleverer. Wichtige Verbesserunge… [+1847 chars]",
    },
  ];

  constructor() {
    super();
    console.log("Hello i am constructor from News componenets");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey Top news headline</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4">
                <NewsItem
                  title={"Mytitle"}
                  description={"description"}
                  imageUrl={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjWvfFQhsiCxoEybXih3gD8Q6PHpkGy_o_Uhqd34xlVAMapAO7HAQ3B_A7cY7wXA0WVOc&usqp=CAU"
                  }
                  newsUrl={"TODO"}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}