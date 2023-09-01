import { Banner } from "components/Banner";

export default function Home() {
  return (
    <div>
      <Banner
        heading={`React Developer`}
        content={
          "I like to craft solid and scalable frontend products with great user experiences."
        }
      />
    </div>
  );
}
