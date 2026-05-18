import Banner from "@/components/Banner";
import Collection from "@/components/Collection";
import Featured from "@/components/Featured";
import QurbaniInsights from "@/components/QurbaniInsights";



export default function Home() {
  return (
    <div>
      <div>
        <Banner />
        <Collection />
        <Featured />
        <QurbaniInsights />
      </div>
    </div>
  );
}
