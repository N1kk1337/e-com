import StaticHeader from "./StaticHeader";
import StickyHeader from "./StickyHeader";

export default function Header() {

    return (    
    <header className="w-full flex-col">
        <StaticHeader></StaticHeader>
        <StickyHeader></StickyHeader>
    </header>

)

    
}