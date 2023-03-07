'use client'
import {productList} from "@/data";
import product from "@/store/product";
import Image from "next/image";
import React, {useEffect, useState} from "react";
import {useSelector} from "@/store/store";
import SwiperCore, {Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import assert from "assert";

export default function Page({params}:{params:{productNo:number}}){

    // const product = productList.filter((product)=>product.no===params.productNo)[0]
    const product = productList.find(product => product.no===Number(params.productNo))
    const [optA, setOptA] = useState('')
    const [optB, setOptB] = useState('')
    const [expend, setExpend] = useState(false)
    const [selectedImage, setIImage] = useState(0)
    const [turn, setTurn] = useState({
        prev:0,
        now:0,
        next:0
    })
    const handleSelectOpt=(e: { currentTarget: { name: string; value: string; }; })=>{
        let opt = e.currentTarget.name;
        let selected = e.currentTarget.value
        if(opt==='optA') setOptA(selected);
        if(opt==='optB') setOptB(selected);
    }
    useEffect(()=>{
        //가격변경
    },[optA,optB])
    // SwiperCore.use([Navigation, Pagination]);
    useEffect(() => {
        product && slider(product.photo.length-1, 5);
    },[product])

    return(
        <>
            <div className="flex flex-col w-full md:w-4/5">
                <div className="product-summary flex flex-wrap pb-10 relative h-screen overflow-scroll">
                    <div className="image-box w-3/5 h-3/5 flex sticky top-0">
                        <div className="slide-thumbnail h-full overflow-scroll">
                            {product?.photo &&
                                product.photo.map((url, index)=>(
                                    <div className="thumbnail m-2" key={index}>
                                        <Image className="rounded-xl border-1 aspect-square object-cover"
                                               src={url}
                                               alt="thumbnail"
                                               width={100}
                                               height={100}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                        <div className="slide-wrapper relative selected-image w-full mt-2 overflow-hidden">
                            {product?.photo &&
                                product.photo.map((url:string, index:number)=>(
                                    <div key={index} data-num={index} className={"w-full bg-gray-100 image-slide relative transition-transform duration-700 float-left"+(index!==0?' marginR100':'')}>
                                        <Image className="w-full border-1 rounded-2xl aspect-square object-cover"
                                               src={url}
                                               alt="imageSlide"
                                               width={100}
                                               height={100}/>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="w-2/5 pl-5 h-full">
                        <div className="product-title-block pb-5">
                            <p>
                                {product?.no}
                            </p>
                            <h1 className="text-4xl font-extrabold">
                                {product?.title}
                            </h1>
                        </div>
                        <div className="product-data-block">
                            <span className="text-2xl font-semibold pb-5">
                                {product?.price}원
                            </span>
                            <div className="border-t pt-5">
                                <div className="">
                                    optionA
                                    <fieldset name="p-option" className="flex pt-3 pb-3">
                                        <div className="rounded-xl border-1 pr-3">
                                            <input
                                                name="optA"
                                                type="radio"
                                                value="option1"
                                                id="option1"
                                                checked={optA === 'option1'}
                                                onChange={handleSelectOpt}
                                                className="peer appearance-none"/>
                                            <label
                                                htmlFor="option1"
                                                className="rounded-xl p-2 hover:bg-gray-100 select-none bg-gray-100 border-2 border-transparent peer-checked:border-2 peer-checked:border-teal-200">
                                                option1</label>
                                        </div>
                                        <div className="rounded-xl border-1 pr-3">
                                            <input
                                                name="optA"
                                                type="radio"
                                                value="option2"
                                                id="option2"
                                                checked={optA === 'option2'}
                                                onChange={handleSelectOpt}
                                                className="peer appearance-none"/>
                                            <label
                                                htmlFor="option2"
                                                className="rounded-xl p-2 hover:bg-gray-100 select-none bg-gray-100 border-2 border-transparent peer-checked:border-2 peer-checked:border-teal-200">
                                                option2</label>
                                        </div>
                                    </fieldset>
                                </div>
                                <div className="">
                                    optionB
                                    <fieldset className="flex pt-3 pb-3">
                                        <div className="rounded-xl border-1 pr-3">
                                            <input
                                                name="optB"
                                                type="radio"
                                                value="option3"
                                                id="option3"
                                                checked={optB === 'option3'}
                                                onChange={handleSelectOpt}
                                                className="peer appearance-none"/>
                                            <label
                                                htmlFor="option3"
                                                className="rounded-xl p-2 hover:bg-gray-100 select-none bg-gray-100 border-2 border-transparent peer-checked:border-2 peer-checked:border-teal-200">
                                                option1</label>
                                        </div>
                                        <div className="rounded-xl border-1 pr-3">
                                            <input
                                                name="optB"
                                                type="radio"
                                                value="option4"
                                                id="option4"
                                                checked={optB === 'option4'}
                                                onChange={handleSelectOpt}
                                                className="peer appearance-none"/>
                                            <label
                                                htmlFor="option4"
                                                className="rounded-xl p-2 hover:bg-gray-100 select-none bg-gray-100 border-2 border-transparent peer-checked:border-2 peer-checked:border-teal-200">
                                                option2</label>
                                        </div>
                                    </fieldset>
                                </div>
                                stock: {product?.stock}
                            </div>
                            <div className="pt-3">
                                <button className="w-full p-3 rounded-xl bg-black text-white pt-2"><span>ADD TO CART</span></button>
                                <button
                                    type="button"
                                    className="w-full font-semibold flex justify-center pl-2 pt-2"
                                    aria-controls="shipping-info"
                                    aria-expanded={expend}
                                    id="expandingBtn"
                                    onClick={()=>{setExpend(!expend)}}
                                    >SHIPPING INFORMATION
                                    <Image src={`/expend-${expend}.svg`}
                                           alt={"btn"}
                                           width={24}
                                           height={24}/></button>
                                <div className="pt-2"
                                     id="shipping-info"
                                     aria-labelledby="expandingBtn"
                                     hidden={!expend}>
                                    We will deliver the goods within ...
                                    We will deliver the goods within ...
                                    We will deliver the goods within ...
                                    We will deliver the goods within ...
                                    We will deliver the goods within ...
                                    We will deliver the goods within ...
                                    We will deliver the goods within ...
                                    We will deliver the goods within ...
                                    We will deliver the goods within ...
                                    We will deliver the goods within ...
                                    We will deliver the goods within ...
                                    We will deliver the goods within ...
                                    We will deliver the goods within ...
                                    We will deliver the goods within ...
                                    We will deliver the goods within ...
                                    We will deliver the goods within ...
                                    We will deliver the goods within ...
                                    We will deliver the goods within ...
                                    We will deliver the goods within ...
                                    We will deliver the goods within ...
                                    We will deliver the goods within ...
                                    We will deliver the goods within ...
                                    We will deliver the goods within ...
                                    We will deliver the goods within ...
                                    We will deliver the goods within ...
                                    We will deliver the goods within ...
                                    We will deliver the goods within ...
                                    We will deliver the goods within ...
                                    We will deliver the goods within ...
                                    We will deliver the goods within ...
                                    We will deliver the goods within ...
                                    We will deliver the goods within ...
                                    We will deliver the goods within ...
                                    We will deliver the goods within ...
                                    We will deliver the goods within ...
                                    We will deliver the goods within ...
                                    We will deliver the goods within ...
                                    We will deliver the goods within ...
                                    We will deliver the goods within ...
                                    We will deliver the goods within ...
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-detail pt-10 border-t-2">

                </div>
            </div>
        </>
    )
}
const changeClass=(prev: number, now: number, next: number, ready: number)=>{
    document.querySelectorAll('.image-slide').forEach((el)=>{
        let index = Number(el.getAttribute('data-num'))
        if(index==prev){
            el.classList.remove('toPrev')
            if(index==0){el.classList.add('toInit')}
            else{el.classList.add('toStart')}
        } else if(index==now){
            el.classList.remove('toView')
            el.classList.add('toPrev')
        } else if(index==next){
            el.classList.remove('ready')
            if(index==0){el.classList.remove('toInit')}
            else{el.classList.add('toView')}
        } else if(index==ready){
            el.classList.remove('toStart')
            el.classList.add('ready')
        }
    })
}
const slider=(lastIndex: number, sec: number)=>{
    assert(sec>1)
    let prev=lastIndex
    let now =0
    let next=1
    let ready=2
    setInterval(() => {
            changeClass(prev, now, next, ready);
            prev=now
            now=next
            next=ready
            ready=(ready===lastIndex)?0:ready+1
        console.log(prev,'-',now,'-',next,'-',ready)
        }
        , sec*1000);
    return
}

