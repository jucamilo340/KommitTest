import { useState, useCallback, useRef } from "react";
import { DoublyLinkedList } from "../data-structures/DoublyLinkedList";
import { DLLState, SearchResultData } from "../types";

export function useDoublyLinkedList() {
  const listRef = useRef(new DoublyLinkedList<string>());

  const [state, setState] = useState<DLLState>({
    headValue: null,
    tailValue: null,
    size: 0,
    nodes: [],
  });

  const [searchResult, setSearchResult] = useState<SearchResultData | null>(
    null
  );

  const syncState = useCallback(() => {
    const list = listRef.current;
    setState({
      headValue: list.head?.value ?? null,
      tailValue: list.tail?.value ?? null,
      size: list.size,
      nodes: list.toArray(),
    });
  }, []);

  const insertHead = useCallback(
    (value: string) => {
      if (!value.trim()) return;
      listRef.current.insertHead(value.trim());
      syncState();
    },
    [syncState]
  );

  const insertTail = useCallback(
    (value: string) => {
      if (!value.trim()) return;
      listRef.current.insertTail(value.trim());
      syncState();
    },
    [syncState]
  );

  const removeAtIndex = useCallback(
    (index: number) => {
      listRef.current.removeAtIndex(index);
      syncState();
    },
    [syncState]
  );

  const removeDuplicates = useCallback(() => {
    listRef.current.removeDuplicates();
    syncState();
  }, [syncState]);

  const search = useCallback((value: string) => {
    if (!value.trim()) return;
    const index = listRef.current.search(value.trim());
    setSearchResult({
      query: value.trim(),
      index: index === -1 ? null : index,
    });
  }, []);

  const clear = useCallback(() => {
    listRef.current.clear();
    syncState();
    setSearchResult(null);
  }, [syncState]);

  const clearSearch = useCallback(() => {
    setSearchResult(null);
  }, []);

  return {
    state,
    searchResult,
    insertHead,
    insertTail,
    removeAtIndex,
    removeDuplicates,
    search,
    clear,
    clearSearch,
  };
}