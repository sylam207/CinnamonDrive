import { IButtonLoadingProps } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Spinner } from "./ui/spinner";

const ButtonWithLoading = ({ loading, onClick, label, classNames }: IButtonLoadingProps) => {
    return (
        <button className={cn("flex items-center justify-center gap-2 bg-cinnamoroll-blue text-oxford-blue disabled:bg-cinnamoroll-blue/80 disabled:cursor-not-allowed font-medium mt-6 cursor-pointer rounded-xl w-full h-14 text-lg hover:bg-cinnamoroll-blue/90", classNames)} onClick={onClick} disabled={loading}>
           {label ?? "Continue"}
           {loading ? <Spinner className="w-6 h-6"/>: null}
        </button>
    );

};

export default ButtonWithLoading