import HomePage from "@/module/home";

const Home = ({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) => { return <HomePage searchParams={searchParams} />}

export default Home;
