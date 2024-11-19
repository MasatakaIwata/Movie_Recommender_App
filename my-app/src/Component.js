// import React from "react";
// import { Link } from "react-router-dom"; // react-router-domを使用
// import { Search } from "lucide-react"; // Lucideアイコンの使用
// // import { Button } from "@/components/ui/button";
// // import { Input } from "@/components/ui/input"; // 独自コンポーネントの場合は適宜調整

// export default function Component() {
//   const movies = [
//     { id: 1, title: "七人の侍", year: 1954, director: "黒澤明", image: "/placeholder.svg" },
//     { id: 2, title: "千と千尋の神隠し", year: 2001, director: "宮崎駿", image: "/placeholder.svg" },
//     { id: 3, title: "羅生門", year: 1950, director: "黒澤明", image: "/placeholder.svg" },
//     { id: 4, title: "東京物語", year: 1953, director: "小津安二郎", image: "/placeholder.svg" },
//     { id: 5, title: "となりのトトロ", year: 1988, director: "宮崎駿", image: "/placeholder.svg" },
//     { id: 6, title: "乱", year: 1985, director: "黒澤明", image: "/placeholder.svg" },
//   ];

//   return (
//     <div className="flex flex-col min-h-screen">
//       <header className="px-4 lg:px-6 h-14 flex items-center">
//         <Link className="flex items-center justify-center" to="/">
//           <span className="sr-only">映画お勧めサイト</span>
//           <span className="font-bold text-xl">映画お勧めサイト</span>
//         </Link>
//         <nav className="ml-auto flex gap-4 sm:gap-6">
//           <Link className="text-sm font-medium hover:underline underline-offset-4" to="/">
//             ホーム
//           </Link>
//           <Link className="text-sm font-medium hover:underline underline-offset-4" to="/categories">
//             カテゴリー
//           </Link>
//           <Link className="text-sm font-medium hover:underline underline-offset-4" to="/new">
//             新着
//           </Link>
//         </nav>
//       </header>
//       <main className="flex-1">
//         <section className="w-full py-12 md:py-24 lg:py-32">
//           <div className="container px-4 md:px-6">
//             <div className="flex flex-col items-center justify-center space-y-4 text-center">
//               <div className="space-y-2">
//                 <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
//                   おすすめ映画を見つけよう
//                 </h1>
//                 <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
//                   あなたの好みに合わせた映画をお勧めします。新しい名作を発見しましょう。
//                 </p>
//               </div>
//               <div className="w-full max-w-sm space-y-2">
//                 <form className="flex space-x-2">
//                   <input className="max-w-lg flex-1" placeholder="映画を検索..." type="search" />
//                   <button type="submit" variant="outline">
//                     <Search className="h-4 w-4" />
//                     <span className="sr-only">検索</span>
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </section>
//         <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
//           <div className="container px-4 md:px-6">
//             <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-8">おすすめ映画</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//               {movies.map((movie) => (
//                 <div key={movie.id} className="group relative overflow-hidden rounded-lg shadow-lg">
//                   <Link to={`/movie/${movie.id}`}>
//                     <img
//                       alt={movie.title}
//                       className="object-cover w-full aspect-[2/3] transition-transform group-hover:scale-105"
//                       height={450}
//                       // src={movie.image}
//                       width={300}
//                     />
//                     <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity group-hover:opacity-75" />
//                     <div className="absolute inset-0 flex flex-col items-start justify-end p-4">
//                       <h3 className="text-lg font-bold text-white mb-1">{movie.title}</h3>
//                       <p className="text-sm text-gray-300">{movie.year} - {movie.director}</p>
//                     </div>
//                   </Link>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       </main>
//       <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
//         <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 映画お勧めサイト. All rights reserved.</p>
//         <nav className="sm:ml-auto flex gap-4 sm:gap-6">
//           <Link className="text-xs hover:underline underline-offset-4" to="/terms">
//             利用規約
//           </Link>
//           <Link className="text-xs hover:underline underline-offset-4" to="/privacy">
//             プライバシーポリシー
//           </Link>
//         </nav>
//       </footer>
//     </div>
//   );
// }
