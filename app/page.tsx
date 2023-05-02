import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8 ">
      <section className="flex flex-wrap items-center -mx-4 mt-8">
        <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
          <Image
            className="border-solid border-4 border-white rounded shadow"
            src="/study5.jpg"
            alt="me"
            width={750}
            height={500}
          />
        </div>
        <div className="w-full lg:w-1/2 px-4">
          <h1 className="text-4xl font-bold text-neutral-700 mb-2" id="home">
            Welcome to English Steps
          </h1>
          <h2 className="text-2xl mb-6">The best English school in Osaka</h2>
          <p className="text-lg mb-4">
            Here at English Steps, we specialize in teaching teenagers Eiken. If
            you're interested, come along. We offer affordable prices, so please
            check us out.
          </p>
          <p className="text-lg mb-4">
            At English Steps, we teach teenagers and adults. We specialize in
            Toeic and Eiken. If you want to increase your Toeic score or are
            interested in improving your Eiken score, please contact us. We also
            provide private one-on-one lessons.
          </p>
          <p className="text-lg">
            Please book a{" "}
            <Link
              href="signUp"
              className="text-white font-bold bg-orange-500 border border-gray-100 p-1 rounded shadow"
            >
              free trial
            </Link>{" "}
            today.
          </p>
        </div>
      </section>
      <section className=" bg-white p-16 mt-12">
        <h1 className="text-4xl font-bold text-neutral-700 mb-5">
          What we teach:
        </h1>
        <div className="mb-5">
          <Image
            className="border-solid border-4 border-white rounded shadow mr-4 float-left"
            src="/Eiken1.png"
            alt="me"
            width={70}
            height={50}
          />
          <p
            className="text-lg"
            style={{ marginTop: "10px", marginLeft: "84px" }}
          >
            Eiken（英検）は、日本国内で最も有名な英語能力試験の1つであり、日本の学校や企業において広く使用されています。Eikenは、5つのレベル（5級から1級まで）に分かれており、5級が最も基本的な英語力を測定し、1級は上級者向けの試験です。Eikenは、リスニング、リーディング、ライティング、スピーキングの4つのセクションで構成されており、それぞれのセクションで、文法、語彙、文章構成、発音など、英語の幅広いスキルが評価されます。Eikenは、英語力を正確に測定し、英語学習者が自分のレベルを把握することができる重要な試験です。
          </p>
        </div>

        <div className="">
          <Image
            className="border-solid border-4 border-white rounded shadow mr-4 float-left"
            src="/Toeic2.png"
            alt="me"
            width={70}
            height={50}
          />
          <p
            className="text-lg"
            style={{ marginTop: "10px", marginLeft: "84px" }}
          >
            TOEIC（トーイック）は、日本でもっとも広く受験されている英語能力試験の1つであり、特にビジネスシーンで必要とされる英語力を測定することを目的としています。TOEICは、リスニングとリーディングの2つのセクションで構成されており、英語に関する幅広い知識とスキルが評価されます。TOEICは、点数で評価され、最高点は990点です。TOEICの点数は、企業や大学などの入試や就職活動での英語力証明書として利用されることがあります。
          </p>
        </div>
      </section>

      <div className="py-8  bg-white text-center">
        <h1 className="text-4xl font-bold text-neutral-700 mb-8">Location:</h1>
        <h1 className="text-4xl font-bold text-neutral-700 mb-8">
          天王寺センターハイツ 8-26 悲田院町, 天王寺区, 大阪, 412号室 543-0055
        </h1>
        <div
          className="relative h-0 overflow-hidden rounded shadow border-solid border-4 border-white"
          style={{ paddingBottom: "50%" }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1641.1312865944126!2d135.51473803847588!3d34.648071199781775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000ddfa9cf2c027%3A0xdc07fa2d1400dda0!2z44CSNTQzLTAwNTUgT3Nha2EsIFRlbm5vamkgV2FyZCwgSGlkZW5pbmNoxY0sIDjiiJIyNiDlpKnnjovlr7rjgrvjg7Pjgr_jg7zjg4_jgqTjg4Q!5e0!3m2!1sen!2sjp!4v1682927629797!5m2!1sen!2sjp"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen=""
            loading="lazy"
            style={{ position: "absolute", top: "0", left: "0" }}
          ></iframe>
        </div>
        <h1 className="text-4xl font-bold text-neutral-700 m-8 text-left">
          Access:
        </h1>
        <Image
          className="border-solid border-4 border-white rounded shadow"
          src="/access1.jpg"
          alt="me"
          width={750}
          height={500}
        />
      </div>
    </main>
  );
}
