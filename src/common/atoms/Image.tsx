interface ImageProps {
    className?: string;
    src: string;
    width?: string;
    height?: string;
    alt?: string;
    onClick?: () => void;
}
export const LocalImage = ({
    className,
    width = '100%',
    height,
    src,
    alt,
    onClick,
    ...props
}: ImageProps) => {
    return (
        <div className={className} style={{ width, height }}>
            <img
                src={process.env.PUBLIC_URL + '/assets/' + src}
                alt={alt}
                onClick={onClick}
                {...props}
            />
        </div>
    );
};

export const ServerImage = ({
    className,
    width = '100%',
    height,
    src,
    alt,
    onClick,
    ...props
}: ImageProps) => {
    return (
        <div className={className} style={{ width, height }}>
            <img
                loading="lazy"
                src={process.env.REACT_APP_API_URL + src}
                alt={alt}
                onClick={onClick}
                {...props}
            />
        </div>
    );
};
