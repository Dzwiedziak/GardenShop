<script context="module">
	const elements = new Set();
</script>

<script>
    import AboutUs from "./AboutUs.svelte";
    import Blog from "./Blog.svelte";
    import Cooperation from "./Cooperation.svelte";

    import Faq from "./Faq.svelte";

    import Footer from "./Footer.svelte";
	import Nav from "./Nav.svelte";
    import Opinions from "./Opinions.svelte";
    import Team from "./Team.svelte";
    import Home from "./home.svelte";
	import Contact from "./Contact.svelte";
	import Help from "./Help.svelte";
	import Account from "./Account.svelte";
	import BlogDetails from "./BlogDetails.svelte";
	import Localization from "./Localization.svelte";
	import Notifications from "./Notifications.svelte"
	import NotificationsReport from "./NotificationsReport.svelte";
	import PrivacyPolicy from "./PrivacyPolicy.svelte";
	import ReportProblem from "./ReportProblem.svelte";
	import ReturnsAndExchanges from "./ReturnsAndExchanges.svelte";
	import Settings from "./Settings.svelte";
	import TermsOfService from "./TermsOfService.svelte";
    import AboveNav from "./AboveNav.svelte";

	let viewState = 0;
	export let viewType;

	let changeViewType = function(number){
		console.log(number);
		viewType = number;
	}
</script>
<div class="representive">
	<AboveNav
		bind:viewState
	/>
    {#if viewState == 0}
	<Nav
		bind:viewState
		bind:changeViewType
	/>
	<Home
		bind:viewState
	/>
	<Footer
		bind:viewState
	/>
	{/if}
	{#if viewState == 1}
	<Nav
		bind:viewState
		bind:changeViewType
	/>
	<Faq
		bind:viewState
	/>
	<Footer
		bind:viewState
	/>
	{/if}
	{#if viewState == 2}
	<Nav
		bind:viewState
		bind:changeViewType
	/>
	<AboutUs
		bind:viewState
	/>
	<Footer
		bind:viewState
	/>
	{/if}
	{#if viewState == 3}
	<Nav
		bind:viewState
		bind:changeViewType
	/>
	<Opinions
		bind:viewState
	/>
	<Footer
		bind:viewState
	/>
	{/if}
	{#if viewState == 4}
	<Nav
		bind:viewState
		bind:changeViewType
	/>
	<Team
		bind:viewState
	/>
	<Footer
		bind:viewState
	/>
	{/if}
	{#if viewState == 5}
	<Nav
		bind:viewState
		bind:changeViewType
	/>
	<Blog
		bind:viewState
	/>
	<Footer
		bind:viewState
	/>
	{/if}
	{#if viewState == 6}
	<Nav
		bind:viewState
		bind:changeViewType
	/>
	<Cooperation
		bind:viewState
	/>
	<Footer
		bind:viewState
	/>
	{/if}

	{#if viewState == 7}
	<Nav
		bind:viewState
		bind:changeViewType
	/>
	<Contact
		bind:viewState
	/>
	<Footer
		bind:viewState
	/>
	{/if}

	{#if viewState == 8}
	<Nav
		bind:viewState
		bind:changeViewType
	/>
	<Help
		bind:viewState
	/>
	<Footer
		bind:viewState
	/>
	{/if}

	{#if viewState == 9}
	<Nav
		bind:viewState
		bind:changeViewType
	/>
	<Localization
		bind:viewState
	/>
	<Footer
		bind:viewState
	/>
	{/if}

	{#if viewState == 10}
	<Nav
		bind:viewState
		bind:changeViewType
	/>
	<ReturnsAndExchanges
		bind:viewState
	/>
	<Footer
		bind:viewState
	/>
	{/if}

	{#if viewState == 11}
	<Nav
		bind:viewState
		bind:changeViewType
	/>
	<PrivacyPolicy
		bind:viewState
	/>
	<Footer
		bind:viewState
	/>
	{/if}

	{#if viewState == 12}
	<Nav
		bind:viewState
		bind:changeViewType
	/>
	<TermsOfService
		bind:viewState
	/>
	<Footer
		bind:viewState
	/>
	{/if}

	{#if viewState == 13}
	<Nav
		bind:viewState
		bind:changeViewType
	/>
	<ReportProblem
		bind:viewState
	/>
	<Footer
		bind:viewState
	/>
	{/if}

	{#if viewState == 14}
	<Nav
		bind:viewState
		bind:changeViewType
	/>
	<BlogDetails
		bind:viewState
	/>
	<Footer
		bind:viewState
	/>
	{/if}

	{#if viewState == 15}
	<Nav
		bind:viewState
		bind:changeViewType
	/>
	<Footer
		bind:viewState
	/>
	{/if}
	<div class="space">

	</div>
</div>

<style>
:global(body){
    min-height: 100vh;
}
.space{
	height: 1px;
}
</style>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lato&family=Roboto&family=Saira+Condensed:wght@300&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
</svelte:head>