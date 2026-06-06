--
-- PostgreSQL database dump
--

\restrict LmXPUFjhVDCgCUHIGsMHNc79YC6wZUQJl80ybDB9YfCecU5xqa5tCeQ47NbIfPD

-- Dumped from database version 18.4 (Debian 18.4-1.pgdg13+1)
-- Dumped by pg_dump version 18.4 (Debian 18.4-1.pgdg13+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: bots; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.bots (id, tree, elo, total_matches) FROM stdin;
\.


--
-- Data for Name: games; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.games (id, player_1, player_2, actions, final_state, player_1_hp, player_2_hp, tick_count) FROM stdin;
\.


--
-- Name: bots_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.bots_id_seq', 1, false);


--
-- Name: games_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.games_id_seq', 1, false);


--
-- PostgreSQL database dump complete
--

\unrestrict LmXPUFjhVDCgCUHIGsMHNc79YC6wZUQJl80ybDB9YfCecU5xqa5tCeQ47NbIfPD

