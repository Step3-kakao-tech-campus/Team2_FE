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
