import Image from "next/image";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Footballs from "./components/Footballs";

export default function Home() {
  return (
  <>
      <Header></Header>
      <Banner></Banner>
      <Footballs></Footballs>
  </>

  
  );
}
