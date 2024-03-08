import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed text-2xl font-bold left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:#C4E8F8 dark:#C4E8F8 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:#C4E8F8 lg:p-4 lg:dark:#C4E8F8">
          Website is Coming soon...
          
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            
            <Image
              src="/logo.png"
              alt="EagleMd Logo"
              
              width={300}
              height={100}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative  my-10 rounded"
          src="/profile.png"
          alt="eagleMd Logo"
          width={940}
          height={788}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
       
          <h2 className={`mb-3 text-md `}>
            Depression 
            
          </h2>
          
          <h2 className={`mb-3 text-md `}>
            Anxiety
          </h2>
          
          <h2 className={`mb-3 text-md `}>
            PTSD 
            
          </h2>
          
          <h2 className={`mb-3 text-md `}>
            Phobia
          </h2>
          <h2 className={`mb-3 text-md `}>
            Bipolar I & II disorder  
          </h2>
          
          <h2 className={`mb-3 text-md `}>
           Mood instability 
          </h2>
          
          <h2 className={`mb-3 text-md `}>
            Autism  
          </h2>
          
          <h2 className={`mb-3 text-md `}>
            ADHD 
          </h2>
          <h2 className={`mb-3 text-md `}>
          Schizophrenia 
          </h2>
          
          <h2 className={`mb-3 text-md `}>
          OCD 
          </h2>
          
          <h2 className={`mb-3 text-md `}>
          Eating Disorder  
          </h2>
          
          <h2 className={`mb-3 text-md `}>
          Substance Related addictions
          </h2>
          <h2 className={`mb-3 text-md `}>
          Dementia  
          </h2>
          
          <h2 className={`mb-3 text-md `}>
          Sleeping Disorders  
          </h2>
          
          <h2 className={`mb-3 text-md `}>
          Lifestyle modifications  
          </h2>
          
          <h2 className={`mb-3 text-md `}>
          Life skills 
          </h2>
         
      </div>
      
    </main>
  );
}
