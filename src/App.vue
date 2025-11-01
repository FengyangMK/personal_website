<template>
    <div class="flex content-center px-5 py-5">
        <div class="flex flex-1 content-center justify-center gap-5">
            <Button
                as-child
                class="bg-gray-500 hover:bg-gray-500/70"
                :class="{ 'bg-blue-500': isActive('/') }"
            >
                <router-link to="/"> Home </router-link>
            </Button>

            <Button
                as-child
                class="bg-gray-500 hover:bg-gray-500/70"
                :class="{ 'bg-blue-500': isActive('/about') }"
            >
                <router-link to="/about"> About </router-link>
            </Button>
        </div>

        <DropdownMenu>
            <DropdownMenuTrigger as-child>
                <Button variant="outline" class="justify-end">
                    <Icon
                        icon="radix-icons:moon"
                        class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                    />
                    <Icon
                        icon="radix-icons:sun"
                        class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                    />
                    <span class="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem @click="mode = 'light'"> Light </DropdownMenuItem>
                <DropdownMenuItem @click="mode = 'dark'"> Dark </DropdownMenuItem>
                <DropdownMenuItem @click="mode = 'auto'"> System </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    </div>

    <router-view></router-view>
</template>

<script setup lang="ts">
import { useColorMode } from '@vueuse/core'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Icon } from '@iconify/vue'

const route = useRoute()

console.log('route', route)

const isActive = (path: string) => {
    return route.path === path
}

const mode = useColorMode()
</script>
