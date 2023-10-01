interface ImageProps {
    src: string;
    width?: string;
    height?: string;
    alt?: string;
}
export const LocalImage = ({
    width = '100%',
    height,
    src,
    alt,
    ...props
}: ImageProps) => {
    return (
        <div style={{ width, height }}>
            <img
                src={process.env.PUBLIC_URL + '/assets/' + src}
                alt={alt}
                {...props}
            />
        </div>
    );
};

export const ServerImage = ({
    width = '100%',
    height,
    src,
    alt,
    ...props
}: ImageProps) => {
    return (
        <div style={{ width, height }}>
            <img
                loading="lazy"
                src={process.env.REACT_APP_API_URL + src}
                alt={alt}
                {...props}
            />
        </div>
    );
};
