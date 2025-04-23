import './textarea.scss';
import {ChangeEventHandler, FC, ReactNode, useCallback, useEffect, useMemo, useRef, useState} from 'react';

interface TextAreaProps {
    placeholder: string;
    value: string;
    onChange?: ChangeEventHandler<HTMLTextAreaElement>;
    isInvalid?: boolean;
}

const TextArea: FC<TextAreaProps> = ({
                                   onChange,
                                   value,
                                   placeholder,
                                   isInvalid
                               }) => {
    const [isOverflowing, setIsOverflowing] = useState(false);

    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const adjustTextareaHeight = useCallback(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;

            setIsOverflowing(
                textareaRef.current.scrollHeight > parseInt((120).toString(), 10),
            );
        }
    }, []);

    /**
     * This hook calculates the height of the TextArea after the displayValue is changed and the content is inside the "textareaRef".
     * To maintain the functionality while clearing the input, the length need to be greater than -1.
     */
    useEffect(() => {
        if (typeof value === 'string' && value.length > -1) {
            adjustTextareaHeight();
        }
    }, [adjustTextareaHeight, value]);

    return (
        <div
            className="textarea"
            style={{ borderColor: isInvalid ? 'var(--invalid-border-color)' : undefined }}>
            <textarea value={value} onChange={onChange} placeholder={placeholder} rows={1} ref={textareaRef} style={{overflowY: isOverflowing ? 'scroll' : 'hidden'}}/>
        </div>
    );
};

TextArea.displayName = 'TextArea';

export default TextArea;
