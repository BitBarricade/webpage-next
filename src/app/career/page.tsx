import React from "react";
import type { Metadata } from "next";
import CommingSoon from "@/components/ComingSoon/ComingSoon";

export const metadata: Metadata = {
    title: "Coming Soon",
    description: "Page Not yet ready",
    openGraph: {
        title: "Coming Soon",
        description: "Page Not yet ready",
    }
};

const Career: React.FC = () => {
    return (
        <CommingSoon title="Career" />
    );
};

export default Career;