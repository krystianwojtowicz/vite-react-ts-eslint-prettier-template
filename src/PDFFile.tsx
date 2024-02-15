import {
    Document,
    Image,
    Page,
    StyleSheet,
    Text,
    View,
} from '@react-pdf/renderer';

export interface Display {
    name: string;
    width: number;
    isTitle?: boolean;
    isImage?: boolean;
    alt?: string;
}

function containsHTML(str: string) {
    const htmlRegex = /<\/?[a-z][\s\S]*>/i;
    return htmlRegex.test(str);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TPDFFile = { items?: any; display: Display[] };

const styles = StyleSheet.create({
    item: {
        padding: 10,
        flexDirection: 'row',
    },
    ifImage: {
        width: 70,
    },
    rest: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
});

export const PDFFile = ({ items, display }: TPDFFile) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dynamicStyles: Record<string, any> = {};
    display.forEach((item) => {
        dynamicStyles[item.name] = {
            width: `${item.width}%`,
            // alignSelf: item.width === 25 ? 'flex-start' : 'auto',
            // alignSelf: item.width === 25 ? 'flex-start',
            // height: item.width === 25 ? '100%' : '',
        };
    });
    const generateColumnHeaders = () => {
        return (
            <View style={styles.item}>
                {display.filter((item: Display) => item.name === 'Image')
                    .length > 0 && (
                    <View style={styles.ifImage}>
                        <Text>Images</Text>
                    </View>
                )}
                <View style={styles.rest}>
                    {display
                        .filter((item) => item.name !== 'Image')
                        .map((item) => (
                            <Text
                                key={item.name}
                                style={dynamicStyles[item.name]}
                            >
                                {item.name}
                            </Text>
                        ))}
                </View>
            </View>
        );
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const renderedItems = items.map((item: any) => {
        return (
            <View style={styles.item} key={item.Id}>
                {display.filter((obj: Display) => obj.name === 'Image').length >
                    0 && (
                    <View style={styles.ifImage}>
                        <Image src={item.Image} />
                    </View>
                )}
                <View style={styles.rest}>
                    {display
                        .filter((obj) => obj.name !== 'Image')
                        .map((obj) => (
                            <Text
                                key={obj.name}
                                style={dynamicStyles[obj.name]}
                            >
                                {containsHTML(item[obj.name])
                                    ? item[obj.name].replace(
                                          /(<\/?[a-z][^>]*>|&nbsp;|(?<=\s)&nbsp;|&nbsp;(?=\s)|[\r\n]+)/g,
                                          ' '
                                      )
                                    : item[obj.name]}
                            </Text>
                        ))}
                </View>
            </View>
        );
    });

    return (
        <Document>
            <Page>
                {generateColumnHeaders()}
                {renderedItems}
            </Page>
        </Document>
    );
};
