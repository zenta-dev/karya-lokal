"use client";
import Header from "@/components/dashboard/Header";
import type { NextPage } from "next";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
const Dashboard: NextPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch("http://localhost:3000/article");
        const data = await res.json();
        console.log(data);
        setArticles(data.articles);
        if (data.articles.length > 0) {
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  // async function onSubmit(data: ProfileFormValues) {
  //   const json1 = await parseHtmlToJson(`<div>${value}</div>`);
  //   console.log(json1);
  //   const json = JSON.parse(json1);
  //   const uri = "http://localhost:3000/article/save";
  //   const dummy = {
  //     title: "Dummy Title1",
  //     image: "https://dummyimage.com/600x400/000/fff",
  //     author: "Dummy Author",
  //     collaborators: [],
  //     category: "Dummy Category",
  //     tags: [],
  //     published: false,
  //     content: json,
  //   };
  //   const token = session?.user?.token;
  //   console.log(dummy);
  //   const res = await fetch(uri, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${token}`,
  //     },
  //     body: JSON.stringify(dummy),
  //   });
  //   console.log(res);
  // }
  return (
    <div className="space-y-6">

    </div>
  );
};

export default Dashboard;
