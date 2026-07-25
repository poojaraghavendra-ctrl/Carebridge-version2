"use client";
import { createContext,useContext,useMemo,useState } from "react";
type Item={id:string;name:string;price:number;qty:number};
type CartValue={items:Item[];count:number;total:number;add:(item:Omit<Item,"qty">)=>void;change:(id:string,d:number)=>void;clear:()=>void};
const C=createContext<CartValue|null>(null);
export function CartProvider({children}:{children:React.ReactNode}){const[items,setItems]=useState<Item[]>([]);const add=(item:Omit<Item,"qty">)=>setItems(p=>p.some(x=>x.id===item.id)?p.map(x=>x.id===item.id?{...x,qty:x.qty+1}:x):[...p,{...item,qty:1}]);const change=(id:string,d:number)=>setItems(p=>p.map(x=>x.id===id?{...x,qty:x.qty+d}:x).filter(x=>x.qty>0));const clear=()=>setItems([]);const count=items.reduce((s,x)=>s+x.qty,0);const total=items.reduce((s,x)=>s+x.price*x.qty,0);const value=useMemo(()=>({items,count,total,add,change,clear}),[items,count,total]);return <C.Provider value={value}>{children}</C.Provider>}
export function useCart(){const v=useContext(C);if(!v)throw new Error("useCart must be inside CartProvider");return v}
