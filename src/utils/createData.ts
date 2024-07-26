import { faker } from "@faker-js/faker";

interface Data {
  icon: string;
  community: string;
  description: string;
  img: string;
  online: number;
  members: number;
  tag: "VERIFIED" | "PARTNERED" | "VERIFIED & PARTENERED" | "NONE";
}

export default function createData(id: number) {
  faker.seed(id);

  let promise: Promise<Data[]> = new Promise((Resolve) => {
    const allData = Array.from({ length: 21 }).map(() => {
      const data: Data = {
        icon: faker.color.rgb(),
        community: faker.word.adjective(),
        description: faker.word.words({ count: { min: 8, max: 12 } }),
        img: faker.image.urlPicsumPhotos({ width: 240, height: 145 }),
        online: faker.number.int({ min: 100000, max: 500000 }),
        members: faker.number.int({ min: 500000, max: 1000000 }),
        tag: faker.helpers.arrayElement([
          "VERIFIED",
          "PARTNERED",
          "VERIFIED & PARTENERED",
          "NONE",
        ]),
      };
      return data;
    });
    Resolve(allData);
  });
  return promise;
}
