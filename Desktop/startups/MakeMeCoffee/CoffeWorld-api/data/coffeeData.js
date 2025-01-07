const coffeeData = [
    {
      id: "espresso",
      name: "Espresso",
      ingredients: {
        espresso: { min: 18, max: 18 },
        milk: { min: 0, max: 0 },
        foam: { min: 0, max: 0 },
      },
      caffeine: { min: 60, max: 70 },
      origin: "Italy",
      ratio: "1:2-1:3",
      brewTime: "25-30 Sekunden",
      pressure: "6-9 BAR",
      temperature: "88-96°C",
      preparation:
        "Verwenden Sie etwa 7 g fein gemahlenen Kaffee und 25-30 ml Wasser. Der Espresso wird in einer dickwandigen Espressotasse serviert.",
      description:
        "Der Klassiker unter den Kaffees – stark, aromatisch und schnell genossen.",
    },
    {
      id: "ristretto",
      name: "Ristretto",
      ingredients: {
        ristretto: { min: 15, max: 15 }, // Eigenständige Zubereitungsart
        milk: { min: 0, max: 0 },
        foam: { min: 0, max: 0 },
      },
      caffeine: { min: 60, max: 70 },
      origin: "Italy",
      ratio: "1:1-1:1,5",
      brewTime: "15-20 Sekunden",
      pressure: "9-11 BAR", // Höherer Druck für intensiveren Geschmack
      temperature: "88-92°C",
      preparation:
        "Mit weniger Wasser als Espresso und feiner gemahlenem Kaffee zubereiten. Sehr intensiv und konzentriert.",
      description:
        "Die konzentrierteste Form des Kaffees - noch intensiver als Espresso.",
    },
    {
      id: "lungo",
      name: "Lungo",
      ingredients: {
        lungo: { min: 50, max: 50 }, // Eigenständige Zubereitungsart
        milk: { min: 0, max: 0 },
        foam: { min: 0, max: 0 },
      },
      caffeine: { min: 60, max: 70 },
      origin: "Italy",
      ratio: "1:3-1:4",
      brewTime: "35-40 Sekunden",
      pressure: "5-7 BAR", // Niedrigerer Druck für sanftere Extraktion
      temperature: "88-94°C",
      preparation:
        "Mit mehr Wasser und gröber gemahlenem Kaffee zubereiten. Längere Brühzeit für milderen Geschmack.",
      description:
        'Ein „langer" Kaffee mit mildem Geschmack, perfekt für entspannten Genuss.',
    },
    {
      id: "americano",
      name: "Caffè Americano",
      ingredients: {
        espresso: { min: 18, max: 18 },
        milk: { min: 0, max: 0 },
        foam: { min: 0, max: 0 },
        water: { min: 90, max: 90 },
      },
      caffeine: { min: 58, max: 64 },
      origin: "USA",
      preparation:
        "Espresso mit heißem Wasser verdünnen. Das Wasser wird nach dem Espresso hinzugefügt.",
      description: "Ein milder, längerer Kaffee, ähnlich wie Filterkaffee.",
    },
    {
      id: "cappuccino",
      name: "Cappuccino",
      ingredients: {
        espresso: { min: 18, max: 18 },
        milk: { min: 54, max: 60 },
        foam: { min: 54, max: 60 },
      },
      caffeine: { min: 58, max: 64 },
      origin: "Italy",
      preparation:
        "Ein Drittel Espresso, ein Drittel heiße Milch und ein Drittel Milchschaum. Optional mit Kakaopulver bestäuben.",
      description:
        "Italys beliebtestes Frühstücksgetränk mit perfekter Balance aus Espresso, Milch und Schaum.",
    },
    {
      id: "macchiato",
      name: "Espresso Macchiato",
      ingredients: {
        espresso: { min: 18, max: 18 },
        milk: { min: 10, max: 10 },
        foam: { min: 10, max: 10 },
      },
      caffeine: { min: 58, max: 64 },
      origin: "Italy",
      traditionalRatio:
        "Single Espresso, ein kleiner Schuss Milch und Milchschaum",
      modernRatio: "1:1 Milch zu Espresso",
      preparation:
        "Espresso mit einem Schuss heißer Milch und einer kleinen Haube aus Milchschaum verfeinern.",
      description:
        "Ein „gefleckter“ Espresso – traditionell mit wenig Milch, modern mit ausgewogener Milchnote.",
    },
    {
      id: "caffe-latte",
      name: "Caffè Latte",
      ingredients: {
        espresso: { min: 36, max: 36 },
        milk: { min: 240, max: 240 },
        foam: { min: 10, max: 10 },
      },
      caffeine: { min: 116, max: 128 },
      origin: "Italy",
      preparation:
        "Einen doppelten Espresso in eine große Tasse geben und mit heißer Milch auffüllen.",
      description: "Ein milchiger Frühstückskaffee, ideal für den Morgen.",
    },
    {
      id: "mocha",
      name: "Caffè Mocha",
      ingredients: {
        espresso: { min: 18, max: 18 },
        milk: { min: 60, max: 60 },
        foam: { min: 0, max: 0 },
        cocoa: { min: 30, max: 30 },
      },
      caffeine: { min: 58, max: 64 },
      origin: "Italy",
      preparation:
        "Ein Drittel Espresso, ein Drittel heiße Milch und ein Drittel Kakaopulver oder Schokoladensirup.",
      description: "Ein schokoladiger Traum aus Espresso, Milch und Kakao.",
    },
    {
      id: "flat-white",
      name: "Flat White",
      ingredients: {
        espresso: { min: 36, max: 36 },
        milk: { min: 120, max: 120 },
        foam: { min: 0, max: 0 },
      },
      caffeine: { min: 116, max: 128 },
      origin: "Australien/Neuseeland",
      preparation:
        "Ein doppelter Espresso mit samtig-heißer Milch ohne festen Schaum.",
      description: "Ein starker Latte mit glatter, seidiger Milch.",
    },
    {
      id: "piccolo-latte",
      name: "Piccolo Latte",
      ingredients: {
        espresso: { min: 18, max: 18 },
        milk: { min: 60, max: 60 },
        foam: { min: 10, max: 10 },
      },
      caffeine: { min: 58, max: 64 },
      origin: "Australien",
      preparation:
        "Kleiner Latte mit einem einzelnen Espresso und wenig Milch. Wird in einem kleinen Glas serviert.",
      description: "Ein Mini-Latte für einen schnellen Kaffeegenuss.",
    },
    {
      id: "corretto",
      name: "Espresso Corretto",
      ingredients: {
        espresso: { min: 18, max: 18 },
        milk: { min: 0, max: 0 },
        foam: { min: 0, max: 0 },
        alcohol: { min: 10, max: 10 },
      },
      caffeine: { min: 58, max: 64 },
      origin: "Italy",
      preparation:
        "Einen Schuss Grappa, Weinbrand oder Likör (ca. 10 ml) zum Espresso geben.",
      description:
        "Der Espresso mit dem gewissen Extra – ein Schuss Alkohol für kalte Wintertage.",
    },
    {
      id: "freddo",
      name: "Caffè Freddo",
      ingredients: {
        espresso: { min: 18, max: 18 },
        milk: { min: 0, max: 0 },
        foam: { min: 0, max: 0 },
        water: { min: 60, max: 60 },
        sugar: { min: 10, max: 10 },
      },
      cold: true,
      caffeine: { min: 58, max: 64 },
      origin: "Italy",
      preparation:
        "Espresso mit Zucker süßen und mit kaltem Wasser verlängern. Gut gekühlt servieren.",
      description: "Ein erfrischender, gekühlter Kaffee für heiße Sommertage.",
    },
    {
      id: "mokka_kleiner_schwarzer",
      name: "Mokka / Kleiner Schwarzer",
      ingredients: {
        mokka: { min: 18, max: 18 }, // Geändert von espresso zu mokka
        milk: { min: 0, max: 0 },
        foam: { min: 0, max: 0 },
        water: { min: 0, max: 0 },
        sugar: { min: 0, max: 0 },
      },
      cold: false,
      caffeine: { min: 58, max: 64 },
      origin: "Austria",
      preparation:
        "Ein starker schwarzer Kaffee, ohne Milch oder Zucker, zubereitet in einer Espressomaschine oder traditionell in einer Seihkanne.",
      description:
        "Der klassische Mokka, auch als Kleiner Schwarzer bekannt, bildet die Basis der Wiener Kaffeespezialitäten.",
    },
    {
      id: "grosser_schwarzer",
      name: "Großer Schwarzer",
      ingredients: {
        mokka: { min: 36, max: 36 }, // Geändert von espresso zu mokka
        milk: { min: 0, max: 0 },
        foam: { min: 0, max: 0 },
        water: { min: 0, max: 0 },
        sugar: { min: 0, max: 0 },
      },
      cold: false,
      caffeine: { min: 116, max: 128 },
      origin: "Austria",
      preparation:
        "Ein doppelter Kleiner Schwarzer, der in einer größeren Schale serviert wird.",
      description:
        "Der Große Schwarze ist einfach der doppelte Kleiner Schwarzer, serviert in einer größeren Tasse.",
    },
    {
      id: "kleiner_brauner",
      name: "Kleiner Brauner",
      ingredients: {
        mokka: { min: 18, max: 18 }, // Geändert von espresso zu mokka
        milk: { min: 0, max: 0 },
        foam: { min: 0, max: 0 },
        water: { min: 0, max: 0 },
        sugar: { min: 0, max: 0 },
        whipped_cream: { min: 20, max: 20 },
      },
      cold: false,
      caffeine: { min: 58, max: 64 },
      origin: "Austria",
      preparation:
        "Ein Mokka, der mit Schlagsahne verfeinert und in einer kleinen Schale serviert wird.",
      description:
        "Ein kleiner Mokka, verfeinert mit einer Portion Schlagsahne und in kleiner Schale serviert.",
    },
    {
      id: "grosser_brauner",
      name: "Großer Brauner",
      ingredients: {
        mokka: { min: 36, max: 36 }, // Geändert von espresso zu mokka
        milk: { min: 0, max: 0 },
        foam: { min: 0, max: 0 },
        water: { min: 0, max: 0 },
        sugar: { min: 0, max: 0 },
        whipped_cream: { min: 20, max: 20 },
      },
      cold: false,
      caffeine: { min: 116, max: 128 },
      origin: "Austria",
      preparation:
        "Ein doppelter Mokka, verfeinert mit Schlagsahne und in einer größeren Schale serviert.",
      description:
        "Ein Großer Brauner ist einfach ein doppelter Kleiner Brauner, serviert in einer größeren Tasse.",
    },
    {
      id: "franziskaner",
      name: "Franziskaner",
      ingredients: {
        mokka: { min: 18, max: 18 }, // Geändert von espresso zu mokka
        milk: { min: 40, max: 40 },
        foam: { min: 0, max: 0 },
        water: { min: 0, max: 0 },
        sugar: { min: 0, max: 0 },
        whipped_cream: { min: 20, max: 20 },
      },
      cold: false,
      caffeine: { min: 58, max: 64 },
      origin: "Austria",
      preparation:
        "Ein Mokka, der mit warmer Milch und Schlagsahne kombiniert und in einer großen Schale serviert wird.",
      description:
        "Der Franziskaner ist eine Wiener Kaffeespezialität aus einem verlängerten Mokka mit warmer Milch und Schlagsahne.",
    },
    {
      id: "wiener_melange",
      name: "Wiener Melange",
      ingredients: {
        mokka: { min: 18, max: 18 }, // Geändert von espresso zu mokka
        milk: { min: 40, max: 40 },
        foam: { min: 20, max: 20 },
        water: { min: 0, max: 0 },
        sugar: { min: 0, max: 0 },
      },
      cold: false,
      caffeine: { min: 58, max: 64 },
      origin: "Austria",
      preparation:
        "Ein Mokka mit aufgeschäumter Milch und einer Milchschaumhaube, eventuell mit Kakaopulver bestreut.",
      description:
        "Eine Wiener Melange ist ähnlich dem Franziskaner, jedoch mit Milchschaum statt Schlagsahne.",
    },
    {
      id: "kleines_schalerl_gold",
      name: "Kleines Schalerl Gold",
      ingredients: {
        mokka: { min: 18, max: 18 }, // Geändert von espresso zu mokka
        milk: { min: 40, max: 40 },
        foam: { min: 20, max: 20 },
        water: { min: 0, max: 0 },
        sugar: { min: 0, max: 0 },
      },
      cold: false,
      caffeine: { min: 58, max: 64 },
      origin: "Austria",
      preparation:
        "Ein Mokka, aufgegossen mit heißer Milch und einer sanften Milchschaumhaube.",
      description:
        "Ein Mokka, serviert mit heißer Milch und einer zarten Milchschaumhaube.",
    },
    {
      id: "verkehrter_kaffee",
      name: "Verkehrter Kaffee",
      ingredients: {
        mokka: { min: 18, max: 18 }, // Geändert von espresso zu mokka
        milk: { min: 60, max: 60 },
        foam: { min: 20, max: 20 },
        water: { min: 0, max: 0 },
        sugar: { min: 0, max: 0 },
      },
      cold: false,
      caffeine: { min: 58, max: 64 },
      origin: "Austria",
      preparation:
        "Ein Mokka mit einem hohen Milchanteil, der dem Getränk eine latte-macchiato-artige Textur verleiht.",
      description:
        "Der Verkehrte Kaffee besteht aus einem Mokka, aber mit sehr viel Milch, was ihn zu einem milden, hellen Kaffee macht.",
    },
    {
      id: "kapuziner",
      name: "Kapuziner",
      ingredients: {
        mokka: { min: 18, max: 18 }, // Geändert von espresso zu mokka
        milk: { min: 0, max: 0 },
        foam: { min: 0, max: 0 },
        water: { min: 0, max: 0 },
        sugar: { min: 0, max: 0 },
        whipped_cream: { min: 20, max: 20 },
      },
      cold: false,
      caffeine: { min: 58, max: 64 },
      origin: "Austria",
      preparation: "Ein Mokka, verfeinert mit ein paar Tropfen Schlagsahne.",
      description:
        "Ein kleiner Mokka, der mit Schlagsahne verfeinert wird, wobei der Kaffee die typische braune Farbe einer Kapuzinerkutte annimmt.",
    },
    {
      id: "fiaker",
      name: "Fiaker",
      ingredients: {
        mokka: { min: 36, max: 36 }, // Geändert von espresso zu mokka
        milk: { min: 0, max: 0 },
        foam: { min: 0, max: 0 },
        water: { min: 0, max: 0 },
        sugar: { min: 10, max: 10 },
        liquor: { min: 20, max: 20 },
        whipped_cream: { min: 20, max: 20 },
      },
      cold: false,
      caffeine: { min: 116, max: 128 },
      origin: "Austria",
      preparation:
        "Ein großer Mokka, gesüßt und mit Kirschwasser, Pflaumenschnaps oder Rum und Schlagsahne verfeinert.",
      description:
        "Ein Fiaker ist ein Wiener Kaffee mit einem Schuss Alkohol und einer Kirsche als Dekoration, inspiriert von den Kutschern Wiens.",
    },
    {
      id: "einspaenner",
      name: "Einspänner",
      ingredients: {
        mokka: { min: 36, max: 36 }, // Geändert von espresso zu mokka
        milk: { min: 0, max: 0 },
        foam: { min: 0, max: 0 },
        water: { min: 0, max: 0 },
        sugar: { min: 0, max: 0 },
        whipped_cream: { min: 20, max: 20 },
      },
      cold: false,
      caffeine: { min: 116, max: 128 },
      origin: "Austria",
      preparation:
        "Ein doppelter Mokka mit 3cl Wasser verlängert und einer Haube aus kalter Schlagsahne.",
      description:
        "Der Einspänner wird traditionell in einem Glas serviert, mit Schlagsahne und Puderzucker, und war ein beliebtes Getränk bei Kutschern.",
    },
    {
      id: "kosakenkaffee",
      name: "Kosakenkaffee",
      ingredients: {
        mokka: { min: 18, max: 18 }, // Geändert von espresso zu mokka
        milk: { min: 0, max: 0 },
        foam: { min: 0, max: 0 },
        water: { min: 0, max: 0 },
        sugar: { min: 20, max: 20 },
        liquor: { min: 22, max: 22 },
      },
      cold: false,
      caffeine: { min: 58, max: 64 },
      origin: "Austria",
      preparation: "Ein Mokka mit Rotwein, Zucker und einem Schuss Wodka.",
      description:
        "Der Kosakenkaffee enthält Rotwein und Wodka und ist eine starke, exotische Variante des klassischen Mokka.",
    },
    {
      id: "zarenkaffee",
      name: "Zarenkaffee",
      ingredients: {
        mokka: { min: 18, max: 18 }, // Geändert von espresso zu mokka
        milk: { min: 0, max: 0 },
        foam: { min: 0, max: 0 },
        water: { min: 0, max: 0 },
        sugar: { min: 0, max: 0 },
        egg_yolk: { min: 20, max: 20 },
      },
      cold: false,
      caffeine: { min: 58, max: 64 },
      origin: "Austria",
      preparation:
        "Ein starker Mokka mit einer Haube aus gezuckertem und verquirltem Eigelb.",
      description:
        "Der Zarenkaffee ist eine eher ungewöhnliche Spezialität, die mit einer Haube aus Eigelb serviert wird.",
    },
    {
      id: "wiener_eiskaffee",
      name: "Wiener Eiskaffee",
      ingredients: {
        mokka: { min: 36, max: 36 }, // Geändert von espresso zu mokka
        milk: { min: 40, max: 40 },
        foam: { min: 0, max: 0 },
        water: { min: 0, max: 0 },
        sugar: { min: 0, max: 0 },
        ice_cream: { min: 40, max: 40 },
      },
      cold: true,
      caffeine: { min: 116, max: 128 },
      origin: "Austria",
      preparation:
        "Mokka mit Vanilleeis, kalter Milch und Zucker, stilgerecht mit einem Strohhalm und Löffel serviert.",
      description:
        "Wiener Eiskaffee ist ein beliebtes, kaltes Kaffeegetränk, das warmen Kaffee mit Eiscreme vereint.",
    },
  ];
  export default coffeeData;
  