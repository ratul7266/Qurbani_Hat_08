import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import animals from "@/data/animals.json";
import AnimalDetailsClient from "@/components/AnimalDetailsClient";

const AnimalDetailPage = async ({ params }) => {

  const { id } = await params;

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect(`/login?callbackURL=/animals/${id}`);
  }

  const singleAnimal = animals.find(
    (animal) => animal.id.toString() === id
  );

  if (!singleAnimal) {
    return <h2>Animal Not Found</h2>;
  }

  return <AnimalDetailsClient animal={singleAnimal} />;
};

export default AnimalDetailPage;