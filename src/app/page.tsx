// src/app/page.tsx
import { db } from '@/firebase/config'; // Tuodaan Firestore db-instanssi
import { doc, getDoc } from 'firebase/firestore'; // Tuodaan Firestore-funktiot

export default async function Home() {
  let data: any = null; // Alustetaan data nulliksi
  let error: string | null = null; // Virheviesti

  try {
    // Tässä haetaan dataa Firestoresta.
    // KORVAA 'your-collection-name' ja 'your-document-id' omilla nimilläsi!
    // Esimerkiksi, jos sinulla on kokoelma nimeltä 'users' ja siinä dokumentti 'admin', käytä 'users', 'admin'.
    // Voit myös luoda testidokumentin Firebase-konsolin Firestore-osiossa:
    // Kokoelma: test-data
    // Dokumentti: my-doc
    // Kenttä: message, Arvo: Hello from Firestore!
    const docRef = doc(db, 'test-data', 'my-doc'); // Hae viittaus dokumenttiin
    const docSnap = await getDoc(docRef); // Yritä hakea dokumentti

    if (docSnap.exists()) {
      // Jos dokumentti löytyi, tallenna sen data
      data = docSnap.data();
      console.log("Document data:", data); // Kirjoitetaan data palvelimen konsoliin
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
      error = "No such document!";
    }
  } catch (e: any) {
    console.error("Error fetching document: ", e);
    error = "Error fetching document: " + e.message;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        {/* Tähän voit lisätä logoja tai muuta sisältöä */}
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        {/* Next.js logo tai vastaava, jätetään alkuperäisestä paikalleen */}
        <h1 className="text-4xl font-bold">Welcome to Next.js!</h1>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        {error && <p className="text-red-500 col-span-4">{error}</p>}
        {data ? (
          <div className="col-span-4">
            <h2 className="text-2xl font-semibold mb-2">Data from Firestore:</h2>
            {/* Näytetään haettu data JSON-muodossa */}
            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-auto text-left">
              {JSON.stringify(data, null, 2)}
            </pre>
          </div>
        ) : (
          !error && <p className="col-span-4">Loading data or no data found...</p>
        )}
        {/* Muu alkuperäinen sisältö voi olla täällä */}
      </div>
    </main>
  );
}
