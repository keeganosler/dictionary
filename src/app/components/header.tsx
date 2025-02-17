import Dropdown from "./shared/dropdown";
import Toggle from "./shared/toggle";

export default function Header() {
    return (
        <div className="flex align-center justify-between">
            <div>
                {/* icon here */}
            </div>
            <div className="flex align-center">
                <div>
                    <Dropdown />
                    <Toggle />
                </div>
            </div>
        </div>
    )
}