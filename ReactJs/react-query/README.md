# React Query Tutorial

## Contents

1. **Basic Setup and Installation**

   - Step-by-step guide to installing React Query and integrating it into a React project.
   - Configuration of React Query Provider at the root level.

2. **Traditional Data Fetching vs React Query**

   - Demonstrates the difference between fetching data using traditional `useEffect` and `fetch` methods versus using React Query's `useQuery` hook.
   - Highlights benefits such as caching, background updates, and simplified code.

3. **React Query Core Concepts**

   - Explanation and practical usage of `useQuery` for fetching data.
   - How to handle loading, error, and success states.
   - Customizing query keys and query functions.

4. **Home Page Overview**

   - Central navigation to different React Query examples and tutorials.
   - Introduction to the structure and flow of the demo application.

5. **Infinite Queries (Infinite Scrolling)**

   - Implementation of infinite scrolling using React Query's `useInfiniteQuery`.
   - Loading more data as the user scrolls, with proper handling of pagination and query parameters.

6. **Mutations (Create/Update/Delete Operations)**

   - Usage of React Query's `useMutation` for creating new posts or todos.
   - Handling optimistic updates, error states, and query invalidation after mutations.

7. **Pagination**

   - Fetching paginated data from an API using React Query.
   - Navigating between pages and updating the UI accordingly.

8. **Post Details**

   - Fetching and displaying details for a single post using dynamic query keys.
   - Handling route parameters and conditional queries.

9. **Advanced useQuery Properties**

   - Exploring advanced options such as `refetchOnWindowFocus`, `staleTime`, `cacheTime`, and `enabled`.
   - Customizing query behavior for different use cases.

10. **Adding Posts**

    - Form component for adding new posts.
    - Integration with mutation hooks and updating the post list after successful creation.

11. **Invalidating Queries**

    - Demonstrating how to manually invalidate queries to refetch data after mutations or other events.

12. **Post Listing and Details**

    - Displaying a list of posts with options to view details, edit, or delete.
    - Efficient data fetching and state management using React Query.

13. **Refetch Interval (Auto Refetching)**

    - Setting up automatic data refetching at specified intervals using React Query options.