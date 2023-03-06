'use client'

import {productList} from '../../data';
import type {product} from "@/store/product";
import Image from "next/image";
import Link from "next/link";
import React, {useEffect, useState} from "react";

export default function Page(){

    const [view, setView] = useState('text')
    let slicedList = sliceArr(productList,3)
    const [sortBy, setSortBy] = useState('date-desc')
    const sortOptions = [
        {value:'price-asc',label:'가격오름차순'},
        {value:'price-desc',label:'가격내림차순'},
        {value:'date-asc',label:'날짜오름차순'},
        {value:'date-desc',label:'날짜내림차순'},
        {value:'name-asc',label:'이름오름차순'},
        {value:'name-desc',label:'이름내림차순'}
    ]
    useEffect(()=>{
        //fetch
    },[sortBy])
    const handleSelect=(e: { currentTarget: { value: React.SetStateAction<string>; }; })=>{
        setSortBy(e.currentTarget.value)
    }

    return(
        <>
        <div className="flex flex-col w-full md:w-4/5">
            <div className="product-filter flex justify-between">
                <div>{productList.length} products</div>
                <div>
                    <select onChange={handleSelect} value={'date-desc'}>
                        {sortOptions.map(({value, label}:{value:string,label:string}, index:number)=>(
                            <option key={index} value={value}>{label}</option>
                        ))}
                    </select>
                </div>
            </div>
            {/*<ProductRow {...slicedList} />*/}
            <div className="product-row flex flex-col w-full">
            {slicedList.map((productRow: product[], idx: number)=>(
                <div key={idx} className="flex">
                    {productRow.map((product, idx)=>(
                    <div key={idx} className="w-1/3 p-1 relative">
                        <Link href={`/product/${product.no}`}>
                            <Image className="w-full rounded-2xl aspect-square object-cover" src={product.thumbnail} alt="thumbnail" width={100} height={100}/>
                            { view==='text' &&
                                <div className="w-full block pt-3 pb-5">
                                    <p>{product.title}</p>
                                    <div>리뷰 별점</div>
                                    <p>{product.price}</p>
                                </div>
                            }
                        </Link>
                    </div>
                    ))}
                </div>
            ))}
            </div>
            <div className="product-row-edge hidden"/>
        </div>
        </>
    )
}
function ProductRow(slicedList:Array<product[]>, view: any){
    return(
        <div className="product-row flex flex-col w-full">
            {slicedList.map((productRow: product[], idx: number)=>(
                <div key={idx} className="flex">
                    {productRow.map((product, idx)=>(
                        <div key={idx} className="w-1/3 p-1 relative">
                            <Link href={`/product/${product.no}`}>
                                <Image className="w-full rounded-2xl aspect-square object-cover" src={product.thumbnail} alt="thumbnail" width={100} height={100}/>
                                { view==='text' &&
                                    <div className="w-full block pt-3 pb-5">
                                        <p>{product.title}</p>
                                        <div>리뷰 별점</div>
                                        <p>{product.price}</p>
                                    </div>
                                }
                            </Link>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

const sliceArr=(list:any[],size:number)=>{
    let lastIndex = list.length-1
    let array:Array<any[]> = []
    let i = 0;
    while(i <= lastIndex){
        let end = i+size;
        if(end > lastIndex){
            array.push(list.slice(i))
            break;
        }else{
            array.push(list.slice(i,end))
            i=end
        }
    }
    return array
}