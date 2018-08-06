<template>
  <div class="app-container">
    <el-table :data="tableData" v-loading="listLoading" element-loading-text="Loading" border fit highlight-current-row>
      <el-table-column align="center" label='ID' width="95">
        <template slot-scope="scope">
          {{scope.$index}}
        </template>
      </el-table-column>
      <el-table-column label="Title">
        <template slot-scope="scope">
          {{scope.row.title}}
        </template>
      </el-table-column>
      <el-table-column label="Author" width="110" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.author}}</span>
        </template>
      </el-table-column>
      <el-table-column label="Pageviews" width="110" align="center">
        <template slot-scope="scope">
          {{scope.row.pageviews}}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="Status" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{scope.row.status}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="Display_time" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span>{{scope.row.display_time}}</span>
        </template>
      </el-table-column>
    </el-table>

    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[4, 8, 12, 16]"
        :page-size="pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        prev-text="上一页"
        next-text="下一页"
        :total="totalCount">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { getList } from '@/api/table'

export default {
  data() {
    return {
      list: null,
      listLoading: true,
      //当前页码
      currentPage: 1,
      //搜索条件
      criteria: '',
      //查询的页码

      //下拉菜单选项
      select: '',
      start: 1,
      //默认每页数据量
      pagesize: 4,
      //表格当前页数据
      tableData: [],
      //默认数据总数
      totalCount: 400,
    }
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList(this.listQuery).then(response => {
        this.list = response.data.items;
        this.totalCount = this.list.length;
        for(let i=0;i<this.pagesize;i++){
          this.tableData.push(this.list[i]);
        }
        this.listLoading = false
      })
    },
    handleSizeChange(val){
      console.log(`每页 ${val} 条`);
      this.tableData = [];
      this.pagesize = val;
      for(let i=0;i<this.pagesize;i++){
        this.tableData.push(this.list[i]);
      }
    },
    handleCurrentChange(val){
      this.tableData = [];
      let startVal = (val-1)*this.pagesize;
      let endVal = val*this.pagesize;
      for(let i=startVal;i<endVal;i++){
        this.tableData.push(this.list[i]);
      }
    }
  }
}
</script>
