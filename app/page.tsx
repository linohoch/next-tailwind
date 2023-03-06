'use client'
import Link from "next/link";
import Image from "next/image";
import {Article} from "@/types";
import articleList from "@/data";

export default function Home() {

  return (
    <main className={"flex relative mx-auto flex-col"}>
      <div className={"xm:w-full sm:w-3/5 h-full contents-wrapper"}>

          <div className={"flex items-center flex-col mx-auto w-full justify-center pl-5 pr-5"}>
              {articleList.map( (article:any, idx: any)=>(
                <ArticleCard key={idx}{...article}/>
              ))}
          </div>
      </div>
        <div className={"h-4/5 xm:w-0 sm:w-2/5 drop-shadow-sm bg-yellow-400 fixed right-0 rendermap-wrapper"}>
                지도영역
        </div>
    </main>
  )
}

export function ArticleCard(article:Article){
    return(
        // articleList.map((article)=>(
        // <div>{article.articleNo}</div>
        <Link key={article.articleNo}
            href={"/"}
            className="relative flex items-center p-6 w-full
            rounded-sm shadow-lg hover:bg-green-50 border border-gray-200 mb-3
            transition-shadow">
            <div className="absolute flex left-0 self-center m1 overflow-hidden h-full">
                { article?.photo && (
                    <Image
                        className="rounded-sm object-cover bg-gray-400"
                        src={article.photo}
                        alt={"썸네일"}
                        width={64}
                        height={64}
                />)}
            </div>
                <h2 className="font-sm bold text-center w-full h-6">{article.title}</h2>
                <div className="absolute flex right-2 self-start items-center text-gray-400">
                    <div className="">
                        <Image
                            className="rounded-full opacity-50"
                            alt={"추천"}
                            src={"/thumbs-up-svgrepo-com.svg"}
                            width={12}
                            height={12}/>
                    </div>
                    <p>{article.likeCnt}</p>
                    <div className="">
                        <Image
                            className="rounded-full opacity-50"
                            alt={"읽음"}
                            src={"/eye-svgrepo-com.svg"}
                            width={12}
                            height={12}/>
                    </div>
                    <p>{article.hitCnt}</p>
                </div>
        </Link>
    )
}