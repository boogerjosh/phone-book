import HomePage from "@/modules/home";

const Home = ({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) => { return <HomePage searchParams={searchParams} />}

export default Home;
