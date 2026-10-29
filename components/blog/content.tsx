import { Children, cloneElement, isValidElement, type ComponentPropsWithoutRef, type ReactNode } from "react";
import CodeBlock from "./code-block";

export default function BlogContent({ children }: { children: ReactNode }) {
    let codeBlockNumber = 0;

    function addCopyButtons(content: ReactNode): ReactNode {
        return Children.map(content, (node) => {
            if (!isValidElement<{ children?: ReactNode }>(node)) return node;

            if (node.type === "pre") {
                codeBlockNumber += 1;
                const props = node.props as ComponentPropsWithoutRef<"pre">;
                return <CodeBlock {...props} aria-label={props["aria-label"] ?? `Code example ${codeBlockNumber}`} />;
            }

            if (node.props.children === undefined) return node;
            return cloneElement(node, undefined, addCopyButtons(node.props.children));
        });
    }

    return <>{addCopyButtons(children)}</>;
}
