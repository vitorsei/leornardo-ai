export const getStatusColor = (status?: string) => {
    if (!status) {
        return "tertiary.300";
    }

    return statusColorMap[status] || "tertiary.300";
}

const statusColorMap: Record<string, string> = {
    Alive: "tertiary.400",
    Dead: "tertiary.500",
    unknown: "tertiary.300",
};