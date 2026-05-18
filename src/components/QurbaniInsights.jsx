'use client';
import React from "react";

const data = [
  {
    id: 1,
    q: "কুরবানির ফজিলত কী?",
    a: "কুরবানি আল্লাহ তা'আলার কাছে অত্যন্ত প্রিয় একটি ইবাদাত। এটি বান্দার তাকওয়া ও আল্লাহর প্রতি আনুগত্যের প্রকাশ।",
    arabic: "لَنْ يَنَالَ اللَّهَ لُحُومُهَا وَلَا دِمَاؤُهَا وَلَكِنْ يَنَالُهُ التَّقْوَى مِنْكُمْ",
    ref: "সূরা আল-হাজ্জ: ৩৭",
    bornona:
      "আল্লাহর কাছে কুরবানির গোশত বা রক্ত পৌঁছায় না, বরং পৌঁছায় তোমাদের তাকওয়া। অর্থাৎ কুরবানির আসল উদ্দেশ্য হলো আল্লাহর প্রতি ভয় ও ভালোবাসা নিয়ে ইবাদাত করা।",
    koronio: "একনিষ্ঠতার সাথে কুরবানি করো, লোক দেখানো মনোভাব থেকে বিরত থাকো।",
    icon: "🌿",
  },
  {
    id: 2,
    q: "কুরবানি কেন করা হয়?",
    a: "হযরত ইব্রাহিম (আ.) এর সুন্নাহ অনুসরণ করতে এবং আল্লাহর হুকুম পালনের স্মৃতি ধরে রাখতে কুরবানি করা হয়।",
    arabic: "وَفَدَيْنَاهُ بِذِبْحٍ عَظِيمٍ",
    ref: "সূরা আস-সাফফাত: ১০৭",
    bornona:
      "আল্লাহ তা'আলা ইব্রাহিম (আ.) এর ত্যাগের পরিবর্তে একটি মহান জবেহ পাঠালেন। এটি তাঁর আনুগত্য ও ত্যাগের মহান নিদর্শন, যা আমাদের জন্য অনুসরণীয়।",
    koronio: "বিশুদ্ধ অন্তরে আল্লাহর হুকুম মান্য করো এবং ইব্রাহিম (আ.) এর ত্যাগের কথা স্মরণ করো।",
    icon: "🔥",
  },
  {
    id: 3,
    q: "কুরবানি কার উপর ওয়াজিব?",
    a: "যে মুসলিম নিসাব পরিমাণ সম্পদের মালিক এবং মুকিম (প্রবাসী নয়), তার উপর কুরবানি ওয়াজিব।",
    arabic: "مَنْ وَجَدَ سَعَةً فَلَمْ يُضَحِّ فَلَا يَقْرَبَنَّ مُصَلَّانَا",
    ref: "ইবনে মাজাহ: ৩১২৩",
    bornona:
      "যে ব্যক্তি সামর্থ্য রাখে অথচ কুরবানি করে না, সে যেন আমাদের ঈদগাহে না আসে — এই হাদিস কুরবানির গুরুত্ব বোঝায়।",
    koronio: "সামর্থ্য থাকলে অবশ্যই কুরবানি করো। অবহেলা করলে বড় সওয়াব থেকে বঞ্চিত হবে।",
    icon: "⚖️",
  },
  {
    id: 4,
    q: "কুরবানির পশু কেমন হওয়া চাই?",
    a: "কুরবানির পশু সুস্থ, নিখুঁত ও নির্দিষ্ট বয়সের হতে হবে। অন্ধ, খোঁড়া বা অতিশয় দুর্বল পশু দিয়ে কুরবানি হবে না।",
    arabic: "أَرْبَعٌ لَا تَجُوزُ فِي الْأَضَاحِيِّ: الْعَوْرَاءُ بَيِّنٌ عَوَرُهَا، وَالْمَرِيضَةُ بَيِّنٌ مَرَضُهَا",
    ref: "তিরমিজি: ১৪৯৭",
    bornona:
      "চারটি দোষযুক্ত পশু কুরবানিতে জায়েয নয়: স্পষ্ট কানা, স্পষ্ট অসুস্থ, স্পষ্ট খোঁড়া ও অতি দুর্বল। সুস্থ ও ভালো পশুই আল্লাহর পছন্দ।",
    koronio: "কুরবানির আগে পশু ভালোমতো দেখে নাও। সুস্থ ও নিখুঁত পশু নির্বাচন করো।",
    icon: "🐄",
  },
  {
    id: 5,
    q: "কুরবানির গোশত কীভাবে ভাগ করতে হয়?",
    a: "কুরবানির গোশত তিন ভাগে ভাগ করা সুন্নাত: নিজের জন্য, আত্মীয়-স্বজনের জন্য এবং গরিব-মিসকিনদের জন্য।",
    arabic: "فَكُلُوا مِنْهَا وَأَطْعِمُوا الْبَائِسَ الْفَقِيرَ",
    ref: "সূরা আল-হাজ্জ: ২৮",
    bornona:
      "আল্লাহ বলেছেন: কুরবানির গোশত থেকে নিজেও খাও এবং অভাবী গরিবকেও খাওয়াও। এতে সমাজে ভ্রাতৃত্ব ও সাম্য প্রতিষ্ঠা পায়।",
    koronio: "গরিব-মিসকিনদের ভুলে যেও না। তাদের হক আদায় করো এবং আত্মীয়দেরও উপহার দাও।",
    icon: "🤝",
  },
  {
    id: 6,
    q: "কুরবানির দিন কী কী করণীয়?",
    a: "ঈদের দিন গোসল করা, আতর ব্যবহার করা, ঈদের নামাজ পড়া এবং নামাজের পরে কুরবানি করা সুন্নাত।",
    arabic: "صَلِّ لِرَبِّكَ وَانْحَرْ",
    ref: "সূরা আল-কাউসার: ২",
    bornona:
      "তোমার রবের জন্য নামাজ পড়ো এবং কুরবানি করো। এই আয়াতে নামাজ ও কুরবানি একসাথে উল্লেখ করা হয়েছে, যা এই দুটি আমলের গুরুত্ব বোঝায়।",
    koronio: "ঈদের নামাজ জামাতের সাথে পড়ো, তারপর যথাসময়ে কুরবানি করো এবং দিনটি ইবাদাতে কাটাও।",
    icon: "🌙",
  },
];

const QurbaniInsights = () => {
  return (
    <section className="bg-linear-to-br from-[#f9f5ee] via-[#e8f5e9] to-[#fff8e1] py-14 px-4">
      
      {/* HEADER */}
      <div className=" mb-12">
        <h2 className="text-4xl font-bold text-center mb-2 border-b-2 border-b-green-800 pb-2 inline-block">
          Qurbani Insights
        </h2>
        <p className="text-gray-600 mt-3 max-w-xl text-sm md:text-base">
          কুরবানি সম্পর্কে প্রশ্নোত্তর, আয়াত ও হাদিসের আলোকে সহজ ব্যাখ্যা
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-11/12 mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl border border-green-100 shadow-sm hover:shadow-md transition p-5"
          >
            
            {/* ICON + QUESTION */}
            <div className="flex items-start gap-3">
              <span className="text-2xl">{item.icon}</span>

              <div>
                <p className="text-xs text-green-600 font-bold uppercase">
                  প্রশ্ন
                </p>
                <h3 className="text-lg font-bold text-green-900 leading-snug">
                  {item.q}
                </h3>
              </div>
            </div>

            {/* ANSWER */}
            <div className="mt-4">
              <p className="text-xs text-green-700 font-semibold uppercase">
                উত্তর
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                {item.a}
              </p>
            </div>

            {/* ARABIC */}
            <div className="mt-4 bg-green-50 border border-green-100 rounded-xl p-3 text-right">
              <p className="text-[10px] text-gray-500 text-left mb-1">
                আরবি দলিল
              </p>
              <p className="font-arabic text-lg text-green-900 leading-loose">
                {item.arabic}
              </p>
              <p className="text-xs text-green-600 mt-1 text-left">
                📖 {item.ref}
              </p>
            </div>

            {/* BORNONA */}
            <div className="mt-4 border-l-4 border-green-400 pl-3">
              <p className="text-xs text-gray-500 uppercase">বাংলা বর্ণনা</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.bornona}
              </p>
            </div>

            {/* KORONIO */}
            <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-lg p-3">
              <p className="text-xs text-yellow-700 font-bold uppercase">
                করণীয়
              </p>
              <p className="text-sm text-yellow-800 font-medium">
                👉 {item.koronio}
              </p>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default QurbaniInsights;