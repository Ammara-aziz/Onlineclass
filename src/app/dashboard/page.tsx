/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
const Dashboard = () => {
    return (
        <div className='p-12 text-teal-600'>
            Dashboard Route
            <div>
                <p className='font-bold text-teal-800'>
                    Nested Route
                </p>
                To create a nested route, you can nest folders inside each other. For example, you can add a new /dashboard/settings route by nesting two new folders in the app directory.
            </div>
            <div className="flex flex-col gap-5">
                {`HTML <a> Tag  =>`} Definition and Usage
                <p className="text-indigo-600 text-lg">
                    {`Defines a hyperlink, which is used to link from one page to another.`}
                    <p> The most important attribute of the {`<a>`} element is the href
                        attribute, which indicates the link's destination.
                    </p>
                </p>
                <a
                    target="_blank" href="https://www.w3schools.com/tags/tag_a.asp" className="font-bold text-red-500">HTML Tag LINK
                </a>
            </div>
            <div className="p-5 text-zinc-800 bg-slate-200 flex flex-col gap-4">
                Never Use {`<a>`} in nextjs {`=>`} always use Link Tag
                <Link href={'/dashboard/analytics'}>Analytics
                </Link>
                <a href="/dashboard/settings">Settings</a>
                <Link href={'/dashboard/settings/profile'}>Setting profile
                </Link>
                <Link href={'/dashboard/settings/password'}>Setting password
                </Link>

            </div>
        </div>
    )
};
export default Dashboard;
