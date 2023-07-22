const fs = require("fs/promises")
const { Web3Storage, File } = require("web3.storage")

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGQwNzg1QTAwMDlGN0RGQjcwOEZlNEIwMDhlN2E3OUM5OTczNjMyMUYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODM5OTM1NTU2ODYsIm5hbWUiOiJFVEhHbG9iYWwifQ.tPU3rOmcfx1Bboq6yYCGvjaeap5gnZnCZD5DTgSU_8g";

const client = new Web3Storage({ token });

const main = async () => {
  /**
   * Should upload a batch of medical data medata
   * name, description, image, measurementUnit
   */
  const data = [
    {
      name: "Red Blood Count",
      description: "Red blood cells are an important component of your blood. They’re produced in your bone marrow and live for about 120 days in your circulatory system. Red blood cells are responsible for carrying oxygen to all parts of your body. Having too few red blood cells is known as anemia. Having too many red blood cells is called polycythemia.",
      image: "",
      measurementUnit: "cells per microliter"
    },
    {
      name: "White Blood Count",
      description: "White blood cells are an important part of your body’s immune system. They’re responsible for protecting you from invading pathogens, including bacteria, viruses, fungi, and parasites. Your white blood cell count can be low for a number of reasons — including medications, autoimmune disorders, cancer, and more.",
      image: "",
      measurementUnit: "cells per microliter"
    },
    {
      name: "Hemoglobin",
      description: "Hemoglobin is a protein in your red blood cells that carries oxygen to your body’s organs and tissues and transports carbon dioxide from your organs and tissues back to your lungs. If a hemoglobin test reveals that your hemoglobin level is lower than normal, it means you have a low red blood cell count (anemia).",
      image: "",
      measurementUnit: "grams per deciliter"
    },
    {
      name: "Hematocrit",
      description: "Hematocrit is a measure of how much space red blood cells take up in your blood. A high hematocrit level may mean you’re dehydrated. A low hematocrit level may mean you have anemia.",
      image: "",
      measurementUnit: "percentage"
    },
    {
      name: "Platelets",
      description: "Platelets, or thrombocytes, are small, colorless cell fragments in our blood that form clots and stop or prevent bleeding. Platelets are made in our bone marrow, the sponge-like tissue inside our bones. Bone marrow contains stem cells that develop into red blood cells, white blood cells, and platelets.",
      image: "",
      measurementUnit: "cells per microliter"
    }
  ]

  const files = data.map((d) => {
    return new File([JSON.stringify(d)], `${d.name}.json`, { type: "application/json" })
  })

  const res = await client.put(files, {
  })

  await fs.writeFile("./metadata.json", JSON.stringify(
    data.map(({name}) => ({
      name,
      uri: `ipfs://${res.toString()}/${name}.json`
    })), null, 2));
}

main()
