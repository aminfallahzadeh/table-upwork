// IMPORTS
import type { LazyExoticComponent, ComponentType, JSX } from "react";
import { Suspense } from "react";
import { SuspenseFallback } from "@/shared/components/SuspenseFallback";

/**
 * Suspense Creator
 * @param Component - Lazy-loaded component
 * @param requiredParams - Array of required search parameters
 * @returns Component wrapped in Suspense with route guard
 */
export const createSuspense = (
    Component: LazyExoticComponent<ComponentType>,
    guard: boolean = false,
): JSX.Element => {
    if (guard) {
        return (
            <Suspense fallback={<SuspenseFallback />}>
                <Component />
            </Suspense>
        );
    } else {
        return (
            <Suspense fallback={<SuspenseFallback />}>
                <Component />
            </Suspense>
        );
    }
};
