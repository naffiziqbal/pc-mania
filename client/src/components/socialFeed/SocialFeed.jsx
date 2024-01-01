import Image from "next/legacy/image";
import { useEffect, useState } from "react";

const SocialFeed = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const getPost = async () => {
            const data = await fetch('/db.json')
            const posts = await data.json()
            setPosts(posts)
        }
        getPost()
    }, [])
    return (
        <div>
            <h3 className="my-3 font-bold text-xl"> Follow us on Instagram for news and Offers and more</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {
                    posts?.slice(0, 6).map(post => <div key={post._id}>
                        <div className="border rounded p-3 min-h-fit min-w-fit hover:border-blue-400 hover:scale-105 duration-300">
                            <Image src={post.image}
                                className="min-h-52 w-fit"

                                width={100}
                                height={100}
                                alt="img" />
                            <p className="text-center text-sm font-semibold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet repudiandae quaerat labore autem, totam tenetur blanditiis itaque dolorum delectus modi quidem vero, ipsam, et ea dignissimos explicabo quis quas eos!</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default SocialFeed;
