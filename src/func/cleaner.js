export const cleaner = (result) => {
    result.forEach((item, index) => {
        const temp = result.findLastIndex((i) => item.id === i.id);
        if (index !== temp) {
            result.splice(temp, 1);
        }
    });
};
