
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum CategoryScalarFieldEnum {
    created_at = "created_at",
    id = "id",
    name = "name",
    updated_at = "updated_at"
}

export enum NullsOrder {
    first = "first",
    last = "last"
}

export enum PostScalarFieldEnum {
    created_at = "created_at",
    id = "id",
    title = "title",
    updated_at = "updated_at",
    userId = "userId"
}

export enum QueryMode {
    "default" = "default",
    insensitive = "insensitive"
}

export enum SortOrder {
    asc = "asc",
    desc = "desc"
}

export enum UserScalarFieldEnum {
    created_at = "created_at",
    email = "email",
    id = "id",
    name = "name",
    role = "role",
    updated_at = "updated_at"
}

export enum userRoles {
    ARCHITECT = "ARCHITECT",
    LEAD = "LEAD",
    SENIOR = "SENIOR"
}

export class CategoryCountOrderByAggregateInput {
    created_at?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    name?: Nullable<SortOrder>;
    updated_at?: Nullable<SortOrder>;
}

export class CategoryCreateInput {
    created_at?: Nullable<DateTime>;
    id?: Nullable<string>;
    name: string;
    posts?: Nullable<PostCreateNestedManyWithoutCategoriesInput>;
    updated_at?: Nullable<DateTime>;
}

export class CategoryCreateManyInput {
    created_at?: Nullable<DateTime>;
    id?: Nullable<string>;
    name: string;
    updated_at?: Nullable<DateTime>;
}

export class CategoryCreateNestedManyWithoutPostsInput {
    connect?: Nullable<CategoryWhereUniqueInput[]>;
    connectOrCreate?: Nullable<CategoryCreateOrConnectWithoutPostsInput[]>;
    create?: Nullable<CategoryCreateWithoutPostsInput[]>;
}

export class CategoryCreateOrConnectWithoutPostsInput {
    create: CategoryCreateWithoutPostsInput;
    where: CategoryWhereUniqueInput;
}

export class CategoryCreateWithoutPostsInput {
    created_at?: Nullable<DateTime>;
    id?: Nullable<string>;
    name: string;
    updated_at?: Nullable<DateTime>;
}

export class CategoryListRelationFilter {
    every?: Nullable<CategoryWhereInput>;
    none?: Nullable<CategoryWhereInput>;
    some?: Nullable<CategoryWhereInput>;
}

export class CategoryMaxOrderByAggregateInput {
    created_at?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    name?: Nullable<SortOrder>;
    updated_at?: Nullable<SortOrder>;
}

export class CategoryMinOrderByAggregateInput {
    created_at?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    name?: Nullable<SortOrder>;
    updated_at?: Nullable<SortOrder>;
}

export class CategoryOrderByRelationAggregateInput {
    _count?: Nullable<SortOrder>;
}

export class CategoryOrderByWithAggregationInput {
    _count?: Nullable<CategoryCountOrderByAggregateInput>;
    _max?: Nullable<CategoryMaxOrderByAggregateInput>;
    _min?: Nullable<CategoryMinOrderByAggregateInput>;
    created_at?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    name?: Nullable<SortOrder>;
    updated_at?: Nullable<SortOrder>;
}

export class CategoryOrderByWithRelationInput {
    created_at?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    name?: Nullable<SortOrder>;
    posts?: Nullable<PostOrderByRelationAggregateInput>;
    updated_at?: Nullable<SortOrder>;
}

export class CategoryScalarWhereInput {
    AND?: Nullable<CategoryScalarWhereInput[]>;
    NOT?: Nullable<CategoryScalarWhereInput[]>;
    OR?: Nullable<CategoryScalarWhereInput[]>;
    created_at?: Nullable<DateTimeFilter>;
    id?: Nullable<StringFilter>;
    name?: Nullable<StringFilter>;
    updated_at?: Nullable<DateTimeFilter>;
}

export class CategoryScalarWhereWithAggregatesInput {
    AND?: Nullable<CategoryScalarWhereWithAggregatesInput[]>;
    NOT?: Nullable<CategoryScalarWhereWithAggregatesInput[]>;
    OR?: Nullable<CategoryScalarWhereWithAggregatesInput[]>;
    created_at?: Nullable<DateTimeWithAggregatesFilter>;
    id?: Nullable<StringWithAggregatesFilter>;
    name?: Nullable<StringWithAggregatesFilter>;
    updated_at?: Nullable<DateTimeWithAggregatesFilter>;
}

export class CategoryUpdateInput {
    created_at?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    posts?: Nullable<PostUpdateManyWithoutCategoriesNestedInput>;
    updated_at?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class CategoryUpdateManyMutationInput {
    created_at?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    updated_at?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class CategoryUpdateManyWithWhereWithoutPostsInput {
    data: CategoryUpdateManyMutationInput;
    where: CategoryScalarWhereInput;
}

export class CategoryUpdateManyWithoutPostsNestedInput {
    connect?: Nullable<CategoryWhereUniqueInput[]>;
    connectOrCreate?: Nullable<CategoryCreateOrConnectWithoutPostsInput[]>;
    create?: Nullable<CategoryCreateWithoutPostsInput[]>;
    delete?: Nullable<CategoryWhereUniqueInput[]>;
    deleteMany?: Nullable<CategoryScalarWhereInput[]>;
    disconnect?: Nullable<CategoryWhereUniqueInput[]>;
    set?: Nullable<CategoryWhereUniqueInput[]>;
    update?: Nullable<CategoryUpdateWithWhereUniqueWithoutPostsInput[]>;
    updateMany?: Nullable<CategoryUpdateManyWithWhereWithoutPostsInput[]>;
    upsert?: Nullable<CategoryUpsertWithWhereUniqueWithoutPostsInput[]>;
}

export class CategoryUpdateWithWhereUniqueWithoutPostsInput {
    data: CategoryUpdateWithoutPostsInput;
    where: CategoryWhereUniqueInput;
}

export class CategoryUpdateWithoutPostsInput {
    created_at?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    updated_at?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class CategoryUpsertWithWhereUniqueWithoutPostsInput {
    create: CategoryCreateWithoutPostsInput;
    update: CategoryUpdateWithoutPostsInput;
    where: CategoryWhereUniqueInput;
}

export class CategoryWhereInput {
    AND?: Nullable<CategoryWhereInput[]>;
    NOT?: Nullable<CategoryWhereInput[]>;
    OR?: Nullable<CategoryWhereInput[]>;
    created_at?: Nullable<DateTimeFilter>;
    id?: Nullable<StringFilter>;
    name?: Nullable<StringFilter>;
    posts?: Nullable<PostListRelationFilter>;
    updated_at?: Nullable<DateTimeFilter>;
}

export class CategoryWhereUniqueInput {
    id?: Nullable<string>;
    name?: Nullable<string>;
}

export class DateTimeFieldUpdateOperationsInput {
    set?: Nullable<DateTime>;
}

export class DateTimeFilter {
    equals?: Nullable<DateTime>;
    gt?: Nullable<DateTime>;
    gte?: Nullable<DateTime>;
    in?: Nullable<DateTime[]>;
    lt?: Nullable<DateTime>;
    lte?: Nullable<DateTime>;
    not?: Nullable<NestedDateTimeFilter>;
    notIn?: Nullable<DateTime[]>;
}

export class DateTimeWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedDateTimeFilter>;
    _min?: Nullable<NestedDateTimeFilter>;
    equals?: Nullable<DateTime>;
    gt?: Nullable<DateTime>;
    gte?: Nullable<DateTime>;
    in?: Nullable<DateTime[]>;
    lt?: Nullable<DateTime>;
    lte?: Nullable<DateTime>;
    not?: Nullable<NestedDateTimeWithAggregatesFilter>;
    notIn?: Nullable<DateTime[]>;
}

export class EnumuserRolesNullableFilter {
    equals?: Nullable<userRoles>;
    in?: Nullable<userRoles[]>;
    not?: Nullable<NestedEnumuserRolesNullableFilter>;
    notIn?: Nullable<userRoles[]>;
}

export class EnumuserRolesNullableWithAggregatesFilter {
    _count?: Nullable<NestedIntNullableFilter>;
    _max?: Nullable<NestedEnumuserRolesNullableFilter>;
    _min?: Nullable<NestedEnumuserRolesNullableFilter>;
    equals?: Nullable<userRoles>;
    in?: Nullable<userRoles[]>;
    not?: Nullable<NestedEnumuserRolesNullableWithAggregatesFilter>;
    notIn?: Nullable<userRoles[]>;
}

export class NestedDateTimeFilter {
    equals?: Nullable<DateTime>;
    gt?: Nullable<DateTime>;
    gte?: Nullable<DateTime>;
    in?: Nullable<DateTime[]>;
    lt?: Nullable<DateTime>;
    lte?: Nullable<DateTime>;
    not?: Nullable<NestedDateTimeFilter>;
    notIn?: Nullable<DateTime[]>;
}

export class NestedDateTimeWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedDateTimeFilter>;
    _min?: Nullable<NestedDateTimeFilter>;
    equals?: Nullable<DateTime>;
    gt?: Nullable<DateTime>;
    gte?: Nullable<DateTime>;
    in?: Nullable<DateTime[]>;
    lt?: Nullable<DateTime>;
    lte?: Nullable<DateTime>;
    not?: Nullable<NestedDateTimeWithAggregatesFilter>;
    notIn?: Nullable<DateTime[]>;
}

export class NestedEnumuserRolesNullableFilter {
    equals?: Nullable<userRoles>;
    in?: Nullable<userRoles[]>;
    not?: Nullable<NestedEnumuserRolesNullableFilter>;
    notIn?: Nullable<userRoles[]>;
}

export class NestedEnumuserRolesNullableWithAggregatesFilter {
    _count?: Nullable<NestedIntNullableFilter>;
    _max?: Nullable<NestedEnumuserRolesNullableFilter>;
    _min?: Nullable<NestedEnumuserRolesNullableFilter>;
    equals?: Nullable<userRoles>;
    in?: Nullable<userRoles[]>;
    not?: Nullable<NestedEnumuserRolesNullableWithAggregatesFilter>;
    notIn?: Nullable<userRoles[]>;
}

export class NestedIntFilter {
    equals?: Nullable<number>;
    gt?: Nullable<number>;
    gte?: Nullable<number>;
    in?: Nullable<number[]>;
    lt?: Nullable<number>;
    lte?: Nullable<number>;
    not?: Nullable<NestedIntFilter>;
    notIn?: Nullable<number[]>;
}

export class NestedIntNullableFilter {
    equals?: Nullable<number>;
    gt?: Nullable<number>;
    gte?: Nullable<number>;
    in?: Nullable<number[]>;
    lt?: Nullable<number>;
    lte?: Nullable<number>;
    not?: Nullable<NestedIntNullableFilter>;
    notIn?: Nullable<number[]>;
}

export class NestedStringFilter {
    contains?: Nullable<string>;
    endsWith?: Nullable<string>;
    equals?: Nullable<string>;
    gt?: Nullable<string>;
    gte?: Nullable<string>;
    in?: Nullable<string[]>;
    lt?: Nullable<string>;
    lte?: Nullable<string>;
    not?: Nullable<NestedStringFilter>;
    notIn?: Nullable<string[]>;
    startsWith?: Nullable<string>;
}

export class NestedStringNullableFilter {
    contains?: Nullable<string>;
    endsWith?: Nullable<string>;
    equals?: Nullable<string>;
    gt?: Nullable<string>;
    gte?: Nullable<string>;
    in?: Nullable<string[]>;
    lt?: Nullable<string>;
    lte?: Nullable<string>;
    not?: Nullable<NestedStringNullableFilter>;
    notIn?: Nullable<string[]>;
    startsWith?: Nullable<string>;
}

export class NestedStringNullableWithAggregatesFilter {
    _count?: Nullable<NestedIntNullableFilter>;
    _max?: Nullable<NestedStringNullableFilter>;
    _min?: Nullable<NestedStringNullableFilter>;
    contains?: Nullable<string>;
    endsWith?: Nullable<string>;
    equals?: Nullable<string>;
    gt?: Nullable<string>;
    gte?: Nullable<string>;
    in?: Nullable<string[]>;
    lt?: Nullable<string>;
    lte?: Nullable<string>;
    not?: Nullable<NestedStringNullableWithAggregatesFilter>;
    notIn?: Nullable<string[]>;
    startsWith?: Nullable<string>;
}

export class NestedStringWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedStringFilter>;
    _min?: Nullable<NestedStringFilter>;
    contains?: Nullable<string>;
    endsWith?: Nullable<string>;
    equals?: Nullable<string>;
    gt?: Nullable<string>;
    gte?: Nullable<string>;
    in?: Nullable<string[]>;
    lt?: Nullable<string>;
    lte?: Nullable<string>;
    not?: Nullable<NestedStringWithAggregatesFilter>;
    notIn?: Nullable<string[]>;
    startsWith?: Nullable<string>;
}

export class NullableEnumuserRolesFieldUpdateOperationsInput {
    set?: Nullable<userRoles>;
}

export class NullableStringFieldUpdateOperationsInput {
    set?: Nullable<string>;
}

export class PostCountOrderByAggregateInput {
    created_at?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    title?: Nullable<SortOrder>;
    updated_at?: Nullable<SortOrder>;
    userId?: Nullable<SortOrder>;
}

export class PostCreateInput {
    categories?: Nullable<CategoryCreateNestedManyWithoutPostsInput>;
    created_at?: Nullable<DateTime>;
    id?: Nullable<string>;
    title: string;
    updated_at?: Nullable<DateTime>;
    user: UserCreateNestedOneWithoutPostsInput;
}

export class PostCreateManyInput {
    created_at?: Nullable<DateTime>;
    id?: Nullable<string>;
    title: string;
    updated_at?: Nullable<DateTime>;
    userId: string;
}

export class PostCreateManyUserInput {
    created_at?: Nullable<DateTime>;
    id?: Nullable<string>;
    title: string;
    updated_at?: Nullable<DateTime>;
}

export class PostCreateManyUserInputEnvelope {
    data: PostCreateManyUserInput[];
    skipDuplicates?: Nullable<boolean>;
}

export class PostCreateNestedManyWithoutCategoriesInput {
    connect?: Nullable<PostWhereUniqueInput[]>;
    connectOrCreate?: Nullable<PostCreateOrConnectWithoutCategoriesInput[]>;
    create?: Nullable<PostCreateWithoutCategoriesInput[]>;
}

export class PostCreateNestedManyWithoutUserInput {
    connect?: Nullable<PostWhereUniqueInput[]>;
    connectOrCreate?: Nullable<PostCreateOrConnectWithoutUserInput[]>;
    create?: Nullable<PostCreateWithoutUserInput[]>;
    createMany?: Nullable<PostCreateManyUserInputEnvelope>;
}

export class PostCreateOrConnectWithoutCategoriesInput {
    create: PostCreateWithoutCategoriesInput;
    where: PostWhereUniqueInput;
}

export class PostCreateOrConnectWithoutUserInput {
    create: PostCreateWithoutUserInput;
    where: PostWhereUniqueInput;
}

export class PostCreateWithoutCategoriesInput {
    created_at?: Nullable<DateTime>;
    id?: Nullable<string>;
    title: string;
    updated_at?: Nullable<DateTime>;
    user: UserCreateNestedOneWithoutPostsInput;
}

export class PostCreateWithoutUserInput {
    categories?: Nullable<CategoryCreateNestedManyWithoutPostsInput>;
    created_at?: Nullable<DateTime>;
    id?: Nullable<string>;
    title: string;
    updated_at?: Nullable<DateTime>;
}

export class PostListRelationFilter {
    every?: Nullable<PostWhereInput>;
    none?: Nullable<PostWhereInput>;
    some?: Nullable<PostWhereInput>;
}

export class PostMaxOrderByAggregateInput {
    created_at?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    title?: Nullable<SortOrder>;
    updated_at?: Nullable<SortOrder>;
    userId?: Nullable<SortOrder>;
}

export class PostMinOrderByAggregateInput {
    created_at?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    title?: Nullable<SortOrder>;
    updated_at?: Nullable<SortOrder>;
    userId?: Nullable<SortOrder>;
}

export class PostOrderByRelationAggregateInput {
    _count?: Nullable<SortOrder>;
}

export class PostOrderByWithAggregationInput {
    _count?: Nullable<PostCountOrderByAggregateInput>;
    _max?: Nullable<PostMaxOrderByAggregateInput>;
    _min?: Nullable<PostMinOrderByAggregateInput>;
    created_at?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    title?: Nullable<SortOrder>;
    updated_at?: Nullable<SortOrder>;
    userId?: Nullable<SortOrder>;
}

export class PostOrderByWithRelationInput {
    categories?: Nullable<CategoryOrderByRelationAggregateInput>;
    created_at?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    title?: Nullable<SortOrder>;
    updated_at?: Nullable<SortOrder>;
    user?: Nullable<UserOrderByWithRelationInput>;
    userId?: Nullable<SortOrder>;
}

export class PostScalarWhereInput {
    AND?: Nullable<PostScalarWhereInput[]>;
    NOT?: Nullable<PostScalarWhereInput[]>;
    OR?: Nullable<PostScalarWhereInput[]>;
    created_at?: Nullable<DateTimeFilter>;
    id?: Nullable<StringFilter>;
    title?: Nullable<StringFilter>;
    updated_at?: Nullable<DateTimeFilter>;
    userId?: Nullable<StringFilter>;
}

export class PostScalarWhereWithAggregatesInput {
    AND?: Nullable<PostScalarWhereWithAggregatesInput[]>;
    NOT?: Nullable<PostScalarWhereWithAggregatesInput[]>;
    OR?: Nullable<PostScalarWhereWithAggregatesInput[]>;
    created_at?: Nullable<DateTimeWithAggregatesFilter>;
    id?: Nullable<StringWithAggregatesFilter>;
    title?: Nullable<StringWithAggregatesFilter>;
    updated_at?: Nullable<DateTimeWithAggregatesFilter>;
    userId?: Nullable<StringWithAggregatesFilter>;
}

export class PostUpdateInput {
    categories?: Nullable<CategoryUpdateManyWithoutPostsNestedInput>;
    created_at?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    title?: Nullable<StringFieldUpdateOperationsInput>;
    updated_at?: Nullable<DateTimeFieldUpdateOperationsInput>;
    user?: Nullable<UserUpdateOneRequiredWithoutPostsNestedInput>;
}

export class PostUpdateManyMutationInput {
    created_at?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    title?: Nullable<StringFieldUpdateOperationsInput>;
    updated_at?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class PostUpdateManyWithWhereWithoutCategoriesInput {
    data: PostUpdateManyMutationInput;
    where: PostScalarWhereInput;
}

export class PostUpdateManyWithWhereWithoutUserInput {
    data: PostUpdateManyMutationInput;
    where: PostScalarWhereInput;
}

export class PostUpdateManyWithoutCategoriesNestedInput {
    connect?: Nullable<PostWhereUniqueInput[]>;
    connectOrCreate?: Nullable<PostCreateOrConnectWithoutCategoriesInput[]>;
    create?: Nullable<PostCreateWithoutCategoriesInput[]>;
    delete?: Nullable<PostWhereUniqueInput[]>;
    deleteMany?: Nullable<PostScalarWhereInput[]>;
    disconnect?: Nullable<PostWhereUniqueInput[]>;
    set?: Nullable<PostWhereUniqueInput[]>;
    update?: Nullable<PostUpdateWithWhereUniqueWithoutCategoriesInput[]>;
    updateMany?: Nullable<PostUpdateManyWithWhereWithoutCategoriesInput[]>;
    upsert?: Nullable<PostUpsertWithWhereUniqueWithoutCategoriesInput[]>;
}

export class PostUpdateManyWithoutUserNestedInput {
    connect?: Nullable<PostWhereUniqueInput[]>;
    connectOrCreate?: Nullable<PostCreateOrConnectWithoutUserInput[]>;
    create?: Nullable<PostCreateWithoutUserInput[]>;
    createMany?: Nullable<PostCreateManyUserInputEnvelope>;
    delete?: Nullable<PostWhereUniqueInput[]>;
    deleteMany?: Nullable<PostScalarWhereInput[]>;
    disconnect?: Nullable<PostWhereUniqueInput[]>;
    set?: Nullable<PostWhereUniqueInput[]>;
    update?: Nullable<PostUpdateWithWhereUniqueWithoutUserInput[]>;
    updateMany?: Nullable<PostUpdateManyWithWhereWithoutUserInput[]>;
    upsert?: Nullable<PostUpsertWithWhereUniqueWithoutUserInput[]>;
}

export class PostUpdateWithWhereUniqueWithoutCategoriesInput {
    data: PostUpdateWithoutCategoriesInput;
    where: PostWhereUniqueInput;
}

export class PostUpdateWithWhereUniqueWithoutUserInput {
    data: PostUpdateWithoutUserInput;
    where: PostWhereUniqueInput;
}

export class PostUpdateWithoutCategoriesInput {
    created_at?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    title?: Nullable<StringFieldUpdateOperationsInput>;
    updated_at?: Nullable<DateTimeFieldUpdateOperationsInput>;
    user?: Nullable<UserUpdateOneRequiredWithoutPostsNestedInput>;
}

export class PostUpdateWithoutUserInput {
    categories?: Nullable<CategoryUpdateManyWithoutPostsNestedInput>;
    created_at?: Nullable<DateTimeFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    title?: Nullable<StringFieldUpdateOperationsInput>;
    updated_at?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class PostUpsertWithWhereUniqueWithoutCategoriesInput {
    create: PostCreateWithoutCategoriesInput;
    update: PostUpdateWithoutCategoriesInput;
    where: PostWhereUniqueInput;
}

export class PostUpsertWithWhereUniqueWithoutUserInput {
    create: PostCreateWithoutUserInput;
    update: PostUpdateWithoutUserInput;
    where: PostWhereUniqueInput;
}

export class PostWhereInput {
    AND?: Nullable<PostWhereInput[]>;
    NOT?: Nullable<PostWhereInput[]>;
    OR?: Nullable<PostWhereInput[]>;
    categories?: Nullable<CategoryListRelationFilter>;
    created_at?: Nullable<DateTimeFilter>;
    id?: Nullable<StringFilter>;
    title?: Nullable<StringFilter>;
    updated_at?: Nullable<DateTimeFilter>;
    user?: Nullable<UserRelationFilter>;
    userId?: Nullable<StringFilter>;
}

export class PostWhereUniqueInput {
    id?: Nullable<string>;
}

export class SortOrderInput {
    nulls?: Nullable<NullsOrder>;
    sort: SortOrder;
}

export class StringFieldUpdateOperationsInput {
    set?: Nullable<string>;
}

export class StringFilter {
    contains?: Nullable<string>;
    endsWith?: Nullable<string>;
    equals?: Nullable<string>;
    gt?: Nullable<string>;
    gte?: Nullable<string>;
    in?: Nullable<string[]>;
    lt?: Nullable<string>;
    lte?: Nullable<string>;
    mode?: Nullable<QueryMode>;
    not?: Nullable<NestedStringFilter>;
    notIn?: Nullable<string[]>;
    startsWith?: Nullable<string>;
}

export class StringNullableFilter {
    contains?: Nullable<string>;
    endsWith?: Nullable<string>;
    equals?: Nullable<string>;
    gt?: Nullable<string>;
    gte?: Nullable<string>;
    in?: Nullable<string[]>;
    lt?: Nullable<string>;
    lte?: Nullable<string>;
    mode?: Nullable<QueryMode>;
    not?: Nullable<NestedStringNullableFilter>;
    notIn?: Nullable<string[]>;
    startsWith?: Nullable<string>;
}

export class StringNullableWithAggregatesFilter {
    _count?: Nullable<NestedIntNullableFilter>;
    _max?: Nullable<NestedStringNullableFilter>;
    _min?: Nullable<NestedStringNullableFilter>;
    contains?: Nullable<string>;
    endsWith?: Nullable<string>;
    equals?: Nullable<string>;
    gt?: Nullable<string>;
    gte?: Nullable<string>;
    in?: Nullable<string[]>;
    lt?: Nullable<string>;
    lte?: Nullable<string>;
    mode?: Nullable<QueryMode>;
    not?: Nullable<NestedStringNullableWithAggregatesFilter>;
    notIn?: Nullable<string[]>;
    startsWith?: Nullable<string>;
}

export class StringWithAggregatesFilter {
    _count?: Nullable<NestedIntFilter>;
    _max?: Nullable<NestedStringFilter>;
    _min?: Nullable<NestedStringFilter>;
    contains?: Nullable<string>;
    endsWith?: Nullable<string>;
    equals?: Nullable<string>;
    gt?: Nullable<string>;
    gte?: Nullable<string>;
    in?: Nullable<string[]>;
    lt?: Nullable<string>;
    lte?: Nullable<string>;
    mode?: Nullable<QueryMode>;
    not?: Nullable<NestedStringWithAggregatesFilter>;
    notIn?: Nullable<string[]>;
    startsWith?: Nullable<string>;
}

export class UserCountOrderByAggregateInput {
    created_at?: Nullable<SortOrder>;
    email?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    name?: Nullable<SortOrder>;
    role?: Nullable<SortOrder>;
    updated_at?: Nullable<SortOrder>;
}

export class UserCreateInput {
    created_at?: Nullable<DateTime>;
    email?: Nullable<string>;
    id?: Nullable<string>;
    name: string;
    posts?: Nullable<PostCreateNestedManyWithoutUserInput>;
    role?: Nullable<userRoles>;
    updated_at?: Nullable<DateTime>;
}

export class UserCreateManyInput {
    created_at?: Nullable<DateTime>;
    email?: Nullable<string>;
    id?: Nullable<string>;
    name: string;
    role?: Nullable<userRoles>;
    updated_at?: Nullable<DateTime>;
}

export class UserCreateNestedOneWithoutPostsInput {
    connect?: Nullable<UserWhereUniqueInput>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutPostsInput>;
    create?: Nullable<UserCreateWithoutPostsInput>;
}

export class UserCreateOrConnectWithoutPostsInput {
    create: UserCreateWithoutPostsInput;
    where: UserWhereUniqueInput;
}

export class UserCreateWithoutPostsInput {
    created_at?: Nullable<DateTime>;
    email?: Nullable<string>;
    id?: Nullable<string>;
    name: string;
    role?: Nullable<userRoles>;
    updated_at?: Nullable<DateTime>;
}

export class UserMaxOrderByAggregateInput {
    created_at?: Nullable<SortOrder>;
    email?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    name?: Nullable<SortOrder>;
    role?: Nullable<SortOrder>;
    updated_at?: Nullable<SortOrder>;
}

export class UserMinOrderByAggregateInput {
    created_at?: Nullable<SortOrder>;
    email?: Nullable<SortOrder>;
    id?: Nullable<SortOrder>;
    name?: Nullable<SortOrder>;
    role?: Nullable<SortOrder>;
    updated_at?: Nullable<SortOrder>;
}

export class UserOrderByWithAggregationInput {
    _count?: Nullable<UserCountOrderByAggregateInput>;
    _max?: Nullable<UserMaxOrderByAggregateInput>;
    _min?: Nullable<UserMinOrderByAggregateInput>;
    created_at?: Nullable<SortOrder>;
    email?: Nullable<SortOrderInput>;
    id?: Nullable<SortOrder>;
    name?: Nullable<SortOrder>;
    role?: Nullable<SortOrderInput>;
    updated_at?: Nullable<SortOrder>;
}

export class UserOrderByWithRelationInput {
    created_at?: Nullable<SortOrder>;
    email?: Nullable<SortOrderInput>;
    id?: Nullable<SortOrder>;
    name?: Nullable<SortOrder>;
    posts?: Nullable<PostOrderByRelationAggregateInput>;
    role?: Nullable<SortOrderInput>;
    updated_at?: Nullable<SortOrder>;
}

export class UserRelationFilter {
    is?: Nullable<UserWhereInput>;
    isNot?: Nullable<UserWhereInput>;
}

export class UserScalarWhereWithAggregatesInput {
    AND?: Nullable<UserScalarWhereWithAggregatesInput[]>;
    NOT?: Nullable<UserScalarWhereWithAggregatesInput[]>;
    OR?: Nullable<UserScalarWhereWithAggregatesInput[]>;
    created_at?: Nullable<DateTimeWithAggregatesFilter>;
    email?: Nullable<StringNullableWithAggregatesFilter>;
    id?: Nullable<StringWithAggregatesFilter>;
    name?: Nullable<StringWithAggregatesFilter>;
    role?: Nullable<EnumuserRolesNullableWithAggregatesFilter>;
    updated_at?: Nullable<DateTimeWithAggregatesFilter>;
}

export class UserUpdateInput {
    created_at?: Nullable<DateTimeFieldUpdateOperationsInput>;
    email?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    posts?: Nullable<PostUpdateManyWithoutUserNestedInput>;
    role?: Nullable<NullableEnumuserRolesFieldUpdateOperationsInput>;
    updated_at?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUpdateManyMutationInput {
    created_at?: Nullable<DateTimeFieldUpdateOperationsInput>;
    email?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    role?: Nullable<NullableEnumuserRolesFieldUpdateOperationsInput>;
    updated_at?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUpdateOneRequiredWithoutPostsNestedInput {
    connect?: Nullable<UserWhereUniqueInput>;
    connectOrCreate?: Nullable<UserCreateOrConnectWithoutPostsInput>;
    create?: Nullable<UserCreateWithoutPostsInput>;
    update?: Nullable<UserUpdateWithoutPostsInput>;
    upsert?: Nullable<UserUpsertWithoutPostsInput>;
}

export class UserUpdateWithoutPostsInput {
    created_at?: Nullable<DateTimeFieldUpdateOperationsInput>;
    email?: Nullable<NullableStringFieldUpdateOperationsInput>;
    id?: Nullable<StringFieldUpdateOperationsInput>;
    name?: Nullable<StringFieldUpdateOperationsInput>;
    role?: Nullable<NullableEnumuserRolesFieldUpdateOperationsInput>;
    updated_at?: Nullable<DateTimeFieldUpdateOperationsInput>;
}

export class UserUpsertWithoutPostsInput {
    create: UserCreateWithoutPostsInput;
    update: UserUpdateWithoutPostsInput;
}

export class UserWhereInput {
    AND?: Nullable<UserWhereInput[]>;
    NOT?: Nullable<UserWhereInput[]>;
    OR?: Nullable<UserWhereInput[]>;
    created_at?: Nullable<DateTimeFilter>;
    email?: Nullable<StringNullableFilter>;
    id?: Nullable<StringFilter>;
    name?: Nullable<StringFilter>;
    posts?: Nullable<PostListRelationFilter>;
    role?: Nullable<EnumuserRolesNullableFilter>;
    updated_at?: Nullable<DateTimeFilter>;
}

export class UserWhereUniqueInput {
    id?: Nullable<string>;
}

export class AffectedRowsOutput {
    count: number;
}

export class AggregateCategory {
    _count?: Nullable<CategoryCountAggregate>;
    _max?: Nullable<CategoryMaxAggregate>;
    _min?: Nullable<CategoryMinAggregate>;
}

export class AggregatePost {
    _count?: Nullable<PostCountAggregate>;
    _max?: Nullable<PostMaxAggregate>;
    _min?: Nullable<PostMinAggregate>;
}

export class AggregateUser {
    _count?: Nullable<UserCountAggregate>;
    _max?: Nullable<UserMaxAggregate>;
    _min?: Nullable<UserMinAggregate>;
}

export class Category {
    _count?: Nullable<CategoryCount>;
    created_at: DateTime;
    id: string;
    name: string;
    posts?: Post[];
    updated_at: DateTime;
}

export class CategoryCount {
    posts?: number;
}

export class CategoryCountAggregate {
    _all: number;
    created_at: number;
    id: number;
    name: number;
    updated_at: number;
}

export class CategoryGroupBy {
    _count?: Nullable<CategoryCountAggregate>;
    _max?: Nullable<CategoryMaxAggregate>;
    _min?: Nullable<CategoryMinAggregate>;
    created_at: DateTime;
    id: string;
    name: string;
    updated_at: DateTime;
}

export class CategoryMaxAggregate {
    created_at?: Nullable<DateTime>;
    id?: Nullable<string>;
    name?: Nullable<string>;
    updated_at?: Nullable<DateTime>;
}

export class CategoryMinAggregate {
    created_at?: Nullable<DateTime>;
    id?: Nullable<string>;
    name?: Nullable<string>;
    updated_at?: Nullable<DateTime>;
}

export abstract class IMutation {
    abstract createManyCategory(data: CategoryCreateManyInput[], skipDuplicates?: Nullable<boolean>): AffectedRowsOutput | Promise<AffectedRowsOutput>;

    abstract createManyPost(data: PostCreateManyInput[], skipDuplicates?: Nullable<boolean>): AffectedRowsOutput | Promise<AffectedRowsOutput>;

    abstract createManyUser(data: UserCreateManyInput[], skipDuplicates?: Nullable<boolean>): AffectedRowsOutput | Promise<AffectedRowsOutput>;

    abstract createOneCategory(data: CategoryCreateInput): Category | Promise<Category>;

    abstract createOnePost(data: PostCreateInput): Post | Promise<Post>;

    abstract createOneUser(data: UserCreateInput): User | Promise<User>;

    abstract deleteManyCategory(where?: Nullable<CategoryWhereInput>): AffectedRowsOutput | Promise<AffectedRowsOutput>;

    abstract deleteManyPost(where?: Nullable<PostWhereInput>): AffectedRowsOutput | Promise<AffectedRowsOutput>;

    abstract deleteManyUser(where?: Nullable<UserWhereInput>): AffectedRowsOutput | Promise<AffectedRowsOutput>;

    abstract deleteOneCategory(where: CategoryWhereUniqueInput): Nullable<Category> | Promise<Nullable<Category>>;

    abstract deleteOnePost(where: PostWhereUniqueInput): Nullable<Post> | Promise<Nullable<Post>>;

    abstract deleteOneUser(where: UserWhereUniqueInput): Nullable<User> | Promise<Nullable<User>>;

    abstract updateManyCategory(data: CategoryUpdateManyMutationInput, where?: Nullable<CategoryWhereInput>): AffectedRowsOutput | Promise<AffectedRowsOutput>;

    abstract updateManyPost(data: PostUpdateManyMutationInput, where?: Nullable<PostWhereInput>): AffectedRowsOutput | Promise<AffectedRowsOutput>;

    abstract updateManyUser(data: UserUpdateManyMutationInput, where?: Nullable<UserWhereInput>): AffectedRowsOutput | Promise<AffectedRowsOutput>;

    abstract updateOneCategory(data: CategoryUpdateInput, where: CategoryWhereUniqueInput): Nullable<Category> | Promise<Nullable<Category>>;

    abstract updateOnePost(data: PostUpdateInput, where: PostWhereUniqueInput): Nullable<Post> | Promise<Nullable<Post>>;

    abstract updateOneUser(data: UserUpdateInput, where: UserWhereUniqueInput): Nullable<User> | Promise<Nullable<User>>;

    abstract upsertOneCategory(create: CategoryCreateInput, update: CategoryUpdateInput, where: CategoryWhereUniqueInput): Category | Promise<Category>;

    abstract upsertOnePost(create: PostCreateInput, update: PostUpdateInput, where: PostWhereUniqueInput): Post | Promise<Post>;

    abstract upsertOneUser(create: UserCreateInput, update: UserUpdateInput, where: UserWhereUniqueInput): User | Promise<User>;
}

export class Post {
    _count?: Nullable<PostCount>;
    categories?: Category[];
    created_at: DateTime;
    id: string;
    title: string;
    updated_at: DateTime;
    user: User;
    userId: string;
}

export class PostCount {
    categories?: number;
}

export class PostCountAggregate {
    _all: number;
    created_at: number;
    id: number;
    title: number;
    updated_at: number;
    userId: number;
}

export class PostGroupBy {
    _count?: Nullable<PostCountAggregate>;
    _max?: Nullable<PostMaxAggregate>;
    _min?: Nullable<PostMinAggregate>;
    created_at: DateTime;
    id: string;
    title: string;
    updated_at: DateTime;
    userId: string;
}

export class PostMaxAggregate {
    created_at?: Nullable<DateTime>;
    id?: Nullable<string>;
    title?: Nullable<string>;
    updated_at?: Nullable<DateTime>;
    userId?: Nullable<string>;
}

export class PostMinAggregate {
    created_at?: Nullable<DateTime>;
    id?: Nullable<string>;
    title?: Nullable<string>;
    updated_at?: Nullable<DateTime>;
    userId?: Nullable<string>;
}

export abstract class IQuery {
    abstract aggregateCategory(cursor?: Nullable<CategoryWhereUniqueInput>, orderBy?: Nullable<CategoryOrderByWithRelationInput[]>, skip?: Nullable<number>, take?: Nullable<number>, where?: Nullable<CategoryWhereInput>): AggregateCategory | Promise<AggregateCategory>;

    abstract aggregatePost(cursor?: Nullable<PostWhereUniqueInput>, orderBy?: Nullable<PostOrderByWithRelationInput[]>, skip?: Nullable<number>, take?: Nullable<number>, where?: Nullable<PostWhereInput>): AggregatePost | Promise<AggregatePost>;

    abstract aggregateUser(cursor?: Nullable<UserWhereUniqueInput>, orderBy?: Nullable<UserOrderByWithRelationInput[]>, skip?: Nullable<number>, take?: Nullable<number>, where?: Nullable<UserWhereInput>): AggregateUser | Promise<AggregateUser>;

    abstract categories(cursor?: Nullable<CategoryWhereUniqueInput>, distinct?: Nullable<CategoryScalarFieldEnum[]>, orderBy?: Nullable<CategoryOrderByWithRelationInput[]>, skip?: Nullable<number>, take?: Nullable<number>, where?: Nullable<CategoryWhereInput>): Category[] | Promise<Category[]>;

    abstract category(where: CategoryWhereUniqueInput): Nullable<Category> | Promise<Nullable<Category>>;

    abstract findFirstCategory(cursor?: Nullable<CategoryWhereUniqueInput>, distinct?: Nullable<CategoryScalarFieldEnum[]>, orderBy?: Nullable<CategoryOrderByWithRelationInput[]>, skip?: Nullable<number>, take?: Nullable<number>, where?: Nullable<CategoryWhereInput>): Nullable<Category> | Promise<Nullable<Category>>;

    abstract findFirstCategoryOrThrow(cursor?: Nullable<CategoryWhereUniqueInput>, distinct?: Nullable<CategoryScalarFieldEnum[]>, orderBy?: Nullable<CategoryOrderByWithRelationInput[]>, skip?: Nullable<number>, take?: Nullable<number>, where?: Nullable<CategoryWhereInput>): Nullable<Category> | Promise<Nullable<Category>>;

    abstract findFirstPost(cursor?: Nullable<PostWhereUniqueInput>, distinct?: Nullable<PostScalarFieldEnum[]>, orderBy?: Nullable<PostOrderByWithRelationInput[]>, skip?: Nullable<number>, take?: Nullable<number>, where?: Nullable<PostWhereInput>): Nullable<Post> | Promise<Nullable<Post>>;

    abstract findFirstPostOrThrow(cursor?: Nullable<PostWhereUniqueInput>, distinct?: Nullable<PostScalarFieldEnum[]>, orderBy?: Nullable<PostOrderByWithRelationInput[]>, skip?: Nullable<number>, take?: Nullable<number>, where?: Nullable<PostWhereInput>): Nullable<Post> | Promise<Nullable<Post>>;

    abstract findFirstUser(cursor?: Nullable<UserWhereUniqueInput>, distinct?: Nullable<UserScalarFieldEnum[]>, orderBy?: Nullable<UserOrderByWithRelationInput[]>, skip?: Nullable<number>, take?: Nullable<number>, where?: Nullable<UserWhereInput>): Nullable<User> | Promise<Nullable<User>>;

    abstract findFirstUserOrThrow(cursor?: Nullable<UserWhereUniqueInput>, distinct?: Nullable<UserScalarFieldEnum[]>, orderBy?: Nullable<UserOrderByWithRelationInput[]>, skip?: Nullable<number>, take?: Nullable<number>, where?: Nullable<UserWhereInput>): Nullable<User> | Promise<Nullable<User>>;

    abstract getCategory(where: CategoryWhereUniqueInput): Nullable<Category> | Promise<Nullable<Category>>;

    abstract getPost(where: PostWhereUniqueInput): Nullable<Post> | Promise<Nullable<Post>>;

    abstract getUser(where: UserWhereUniqueInput): Nullable<User> | Promise<Nullable<User>>;

    abstract groupByCategory(by: CategoryScalarFieldEnum[], having?: Nullable<CategoryScalarWhereWithAggregatesInput>, orderBy?: Nullable<CategoryOrderByWithAggregationInput[]>, skip?: Nullable<number>, take?: Nullable<number>, where?: Nullable<CategoryWhereInput>): CategoryGroupBy[] | Promise<CategoryGroupBy[]>;

    abstract groupByPost(by: PostScalarFieldEnum[], having?: Nullable<PostScalarWhereWithAggregatesInput>, orderBy?: Nullable<PostOrderByWithAggregationInput[]>, skip?: Nullable<number>, take?: Nullable<number>, where?: Nullable<PostWhereInput>): PostGroupBy[] | Promise<PostGroupBy[]>;

    abstract groupByUser(by: UserScalarFieldEnum[], having?: Nullable<UserScalarWhereWithAggregatesInput>, orderBy?: Nullable<UserOrderByWithAggregationInput[]>, skip?: Nullable<number>, take?: Nullable<number>, where?: Nullable<UserWhereInput>): UserGroupBy[] | Promise<UserGroupBy[]>;

    abstract post(where: PostWhereUniqueInput): Nullable<Post> | Promise<Nullable<Post>>;

    abstract posts(cursor?: Nullable<PostWhereUniqueInput>, distinct?: Nullable<PostScalarFieldEnum[]>, orderBy?: Nullable<PostOrderByWithRelationInput[]>, skip?: Nullable<number>, take?: Nullable<number>, where?: Nullable<PostWhereInput>): Post[] | Promise<Post[]>;

    abstract user(where: UserWhereUniqueInput): Nullable<User> | Promise<Nullable<User>>;

    abstract users(cursor?: Nullable<UserWhereUniqueInput>, distinct?: Nullable<UserScalarFieldEnum[]>, orderBy?: Nullable<UserOrderByWithRelationInput[]>, skip?: Nullable<number>, take?: Nullable<number>, where?: Nullable<UserWhereInput>): User[] | Promise<User[]>;
}

export class User {
    _count?: Nullable<UserCount>;
    created_at: DateTime;
    email?: Nullable<string>;
    id: string;
    name: string;
    posts?: Post[];
    role?: Nullable<userRoles>;
    updated_at: DateTime;
}

export class UserCount {
    posts?: number;
}

export class UserCountAggregate {
    _all: number;
    created_at: number;
    email: number;
    id: number;
    name: number;
    role: number;
    updated_at: number;
}

export class UserGroupBy {
    _count?: Nullable<UserCountAggregate>;
    _max?: Nullable<UserMaxAggregate>;
    _min?: Nullable<UserMinAggregate>;
    created_at: DateTime;
    email?: Nullable<string>;
    id: string;
    name: string;
    role?: Nullable<userRoles>;
    updated_at: DateTime;
}

export class UserMaxAggregate {
    created_at?: Nullable<DateTime>;
    email?: Nullable<string>;
    id?: Nullable<string>;
    name?: Nullable<string>;
    role?: Nullable<userRoles>;
    updated_at?: Nullable<DateTime>;
}

export class UserMinAggregate {
    created_at?: Nullable<DateTime>;
    email?: Nullable<string>;
    id?: Nullable<string>;
    name?: Nullable<string>;
    role?: Nullable<userRoles>;
    updated_at?: Nullable<DateTime>;
}

export type DateTime = any;
type Nullable<T> = T | null;
